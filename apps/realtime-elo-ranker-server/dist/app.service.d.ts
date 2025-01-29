export interface Player {
    id: string;
    rank: number;
}
export declare class AppService {
    private players;
    addPlayer(player: Player): void;
    getPlayers(): Player[];
    findPlayerById(id: string): Player | undefined;
}
