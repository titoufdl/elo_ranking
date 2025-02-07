import { EventEmitter2 } from '@nestjs/event-emitter';
import { Player } from './model/player.entity';
export declare class AppService {
    private readonly eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    addPlayer(player: Player): void;
    updatePlayer(player: Player): void;
    getPlayers(): Promise<string>;
    findPlayerById(id: string): Promise<Player | null>;
    getEventEmitter(): EventEmitter2;
    notifyPlayerRankChange(player: Player): void;
}
