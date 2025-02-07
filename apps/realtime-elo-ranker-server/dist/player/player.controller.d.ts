import { AppService } from '../app.service';
interface CreatePlayerDto {
    id: string;
}
export declare class PlayerController {
    private readonly appService;
    constructor(appService: AppService);
    getPlayers(): Promise<string>;
    createPlayer(createPlayerDto: CreatePlayerDto): Promise<any>;
}
export {};
