import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('api/ranking')
export class RankingController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getRanking() {
    const players = await this.appService.getPlayers();

    if (players.length === 0) {
      throw new HttpException(
        {
          code: 0,
          message: 'Le classement n\'est pas disponible car aucun joueur n\'existe',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    // Tri des joueurs par leur rang
    return players;
  }
}
