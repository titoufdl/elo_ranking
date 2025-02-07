import { AppService } from '../app.service';
interface MatchResultDto {
    winner: string;
    loser: string;
    draw: boolean;
}
export declare class MatchController {
    private readonly appService;
    constructor(appService: AppService);
    publishMatchResult(matchResultDto: MatchResultDto): Promise<{
        winner: import("../model/player.entity").Player;
        loser: import("../model/player.entity").Player;
    }>;
}
export {};
