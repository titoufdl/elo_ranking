import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AppService, Player } from '../app.service';

interface MatchResultDto {
  winner: string; // ID du gagnant
  loser: string;  // ID du perdant
  draw: boolean;  // Indique si le match est nul
}

@Controller('api/match')
export class MatchController {
  constructor(private readonly appService: AppService) {}

  @Post()
  publishMatchResult(@Body() matchResultDto: MatchResultDto): { winner: Player; loser: Player } {
    const { winner, loser, draw } = matchResultDto;

    // Validation des identifiants
    if ((!winner || typeof winner !== 'string') || (!loser || typeof loser !== 'string')) {
      throw new HttpException(
        { code: 0, message: "Les identifiants du gagnant et du perdant sont obligatoires et doivent être des chaînes de caractères" },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const winnerPlayer = this.appService.findPlayerById(winner);
    const loserPlayer = this.appService.findPlayerById(loser);

    if (!winnerPlayer || !loserPlayer) {
      throw new HttpException(
        { code: 0, message: "Soit le gagnant, soit le perdant indiqué n'existe pas" },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // Retourner le résultat du match, sans modifier le classement
    if (draw) {
      return { winner: winnerPlayer, loser: loserPlayer };
    }

    return { winner: winnerPlayer, loser: loserPlayer };
  }
}
