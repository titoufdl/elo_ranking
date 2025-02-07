import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Player } from './model/player.entity';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  // Ajouter un joueur
  addPlayer(player: Player): void {
    Player.create(player).save().then(() => {
      this.notifyPlayerRankChange(player);
    });
  }

  updatePlayer(player: Player): void {
    Player.update(player.id, player).then(() => {
      this.notifyPlayerRankChange(player);
    });
  }

  // Récupérer tous les joueurs
  async getPlayers(): Promise<string> {
    const players = await Player.find({ order: { rank: 'DESC' } });
    return JSON.stringify(players);
  }

  // Vérifier si un joueur existe
  async findPlayerById(id: string): Promise<Player | null> {
    return await Player.findOne({where: {id: id}});
  }

  getEventEmitter(): EventEmitter2 {
    return this.eventEmitter;
  }

  notifyPlayerRankChange(player: Player): void {
    this.eventEmitter.emit('RankingUpdate', player);
  }
}
