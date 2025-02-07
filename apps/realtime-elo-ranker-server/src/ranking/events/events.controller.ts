import { Controller, Sse } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Observable } from 'rxjs';

@Controller('api/ranking/events')
export class EventsController {

    constructor(private appService: AppService) {}

    @Sse()
    rankingUpdateEvents() {
        return new Observable(observer => {
            const rankingUpdates = this.appService.getEventEmitter();

            rankingUpdates.on('RankingUpdate', (update) => {
                observer.next(new MessageEvent('message', {
                    data: {
                        type: 'RankingUpdate',
                        player: {
                            id: update.id,
                            rank: update.rank,
                        },
                    },
                }));
            });

            rankingUpdates.on('error', (err) => {
                rankingUpdates.removeAllListeners('RankingUpdate');
            });

            return () => {
                rankingUpdates.removeAllListeners('RankingUpdate');
            };
        });
    }

}
