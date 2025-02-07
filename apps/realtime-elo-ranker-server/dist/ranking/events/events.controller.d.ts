import { AppService } from 'src/app.service';
import { Observable } from 'rxjs';
export declare class EventsController {
    private appService;
    constructor(appService: AppService);
    rankingUpdateEvents(): Observable<unknown>;
}
