import { AppService, Player } from '../app.service';
interface CreatePlayerDto {
    id: string;
}
export declare class PlayerController {
    private readonly appService;
    constructor(appService: AppService);
    getPlayers(): Player[];
    createPlayer(createPlayerDto: CreatePlayerDto): Player;
}
export {};
