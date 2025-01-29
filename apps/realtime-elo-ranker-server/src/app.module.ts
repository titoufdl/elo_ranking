import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerController } from './player/player.controller';
import { RankingController } from './ranking/ranking.controller';
import { MatchController } from './match/match.controller';

@Module({
  imports: [],
  controllers: [AppController, PlayerController, RankingController, MatchController],
  providers: [AppService],
})
export class AppModule {}
