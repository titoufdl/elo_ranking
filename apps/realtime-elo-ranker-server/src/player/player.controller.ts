import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { AppService, Player } from '../app.service';

interface CreatePlayerDto {
  id: string;
}

@Controller('api/player')
export class PlayerController {
  constructor(private readonly appService: AppService) {}

  @Get()   
    getPlayers(): Player[] {
        return this.appService.getPlayers();
    }
  @Post()
  createPlayer(@Body() createPlayerDto: CreatePlayerDto): Player {
    const { id } = createPlayerDto;

    if (!id || typeof id !== 'string' || id.trim() === '') {
      throw new HttpException(
        { code: 0, message: "L'identifiant du joueur n'est pas valide" },
        HttpStatus.BAD_REQUEST,
      );
    }

    const existingPlayer = this.appService.findPlayerById(id);
    if (existingPlayer) {
      throw new HttpException(
        { code: 0, message: 'Le joueur existe déjà' },
        HttpStatus.CONFLICT,
      );
    }

    const newPlayer: Player = { id, rank: 0 };
    this.appService.addPlayer(newPlayer);
    return newPlayer;
  }
}
