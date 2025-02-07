import { AppService } from '../app.service';
export declare class RankingController {
    private readonly appService;
    constructor(appService: AppService);
    getRanking(): Promise<string>;
}
