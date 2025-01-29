import { Injectable } from '@nestjs/common';

export interface Player {
  id: string;
  rank: number;
}

@Injectable()
export class AppService {
  private players: Player[] = []; // Tableau pour stocker les joueurs

  // Ajouter un joueur
  addPlayer(player: Player): void {
    this.players.push(player);
  }

  // Récupérer tous les joueurs
  getPlayers(): Player[] {
    return this.players;
  }

  // Vérifier si un joueur existe
  findPlayerById(id: string): Player | undefined {
    return this.players.find(player => player.id === id);
  }
}
