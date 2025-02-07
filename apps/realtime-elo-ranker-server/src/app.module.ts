import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerController } from './player/player.controller';
import { RankingController } from './ranking/ranking.controller';
import { MatchController } from './match/match.controller';
import { EventsController } from './ranking/events/events.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [EventEmitterModule.forRoot(), TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),],
  controllers: [AppController, PlayerController, RankingController, MatchController, EventsController],
  providers: [AppService],
})
export class AppModule {}
