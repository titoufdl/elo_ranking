import { AppService, Player } from '../app.service';
interface MatchResultDto {
    winner: string;
    loser: string;
    draw: boolean;
}
export declare class MatchController {
    private readonly appService;
    constructor(appService: AppService);
    publishMatchResult(matchResultDto: MatchResultDto): {
        winner: Player;
        loser: Player;
    };
}
export {};
