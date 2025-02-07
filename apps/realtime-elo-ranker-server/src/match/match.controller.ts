import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from '../app.service';

interface MatchResultDto {
  winner: string; // ID du gagnant
  loser: string;  // ID du perdant
  draw: boolean;  // Indique si le match est nul
}

@Controller('api/match')
export class MatchController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async publishMatchResult(@Body() matchResultDto: MatchResultDto) {
    const { winner, loser, draw } = matchResultDto;

    // Validation des identifiants
    if ((!winner || typeof winner !== 'string') || (!loser || typeof loser !== 'string')) {
      throw new HttpException(
        { code: 0, message: "Les identifiants du gagnant et du perdant sont obligatoires et doivent être des chaînes de caractères" },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const winnerPlayer = await this.appService.findPlayerById(winner);
    const loserPlayer = await this.appService.findPlayerById(loser);

    if (!winnerPlayer || !loserPlayer) {
      throw new HttpException(
        { code: 0, message: "Soit le gagnant, soit le perdant indiqué n'existe pas" },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const K = 32;
 
    const expectedScoreWinner = 1 / (1 + Math.pow(10, (loserPlayer.rank - winnerPlayer.rank) / 400));
    const expectedScoreLoser = 1 / (1 + Math.pow(10, (winnerPlayer.rank - loserPlayer.rank) / 400));
        
    winnerPlayer.rank += K * (1 - expectedScoreWinner);
    loserPlayer.rank += K * (0 - expectedScoreLoser);
        
    winnerPlayer.rank = Math.round(winnerPlayer.rank);
    loserPlayer.rank = Math.round(loserPlayer.rank);

    this.appService.updatePlayer(winnerPlayer);
    this.appService.updatePlayer(loserPlayer);

    return { winner: winnerPlayer, loser: loserPlayer };
  }
}
