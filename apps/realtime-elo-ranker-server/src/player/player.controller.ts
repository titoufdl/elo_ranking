import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { AppService } from '../app.service';

interface CreatePlayerDto {
  id: string;
}

@Controller('api/player')
export class PlayerController {
  constructor(private readonly appService: AppService) {}

  @Get()   
    async getPlayers(): Promise<string> {
        return await this.appService.getPlayers();
    }

  @Post()
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const { id } = createPlayerDto;

    if (!id || typeof id !== 'string' || id.trim() === '') {
      throw new HttpException(
        { code: 0, message: "L'identifiant du joueur n'est pas valide" },
        HttpStatus.BAD_REQUEST,
      );
    }

    const existingPlayer = await this.appService.findPlayerById(id);
    if (existingPlayer) {
      throw new HttpException(
        { code: 0, message: 'Le joueur existe déjà' },
        HttpStatus.CONFLICT,
      );
    }

    const newPlayer: any = { id: id, rank: 1000 };
    this.appService.addPlayer(newPlayer);
    return newPlayer;
  }
}
