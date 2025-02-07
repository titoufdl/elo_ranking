"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
let MatchController = class MatchController {
    constructor(appService) {
        this.appService = appService;
    }
    async publishMatchResult(matchResultDto) {
        const { winner, loser, draw } = matchResultDto;
        if ((!winner || typeof winner !== 'string') || (!loser || typeof loser !== 'string')) {
            throw new common_1.HttpException({ code: 0, message: "Les identifiants du gagnant et du perdant sont obligatoires et doivent être des chaînes de caractères" }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const winnerPlayer = await this.appService.findPlayerById(winner);
        const loserPlayer = await this.appService.findPlayerById(loser);
        if (!winnerPlayer || !loserPlayer) {
            throw new common_1.HttpException({ code: 0, message: "Soit le gagnant, soit le perdant indiqué n'existe pas" }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
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
};
exports.MatchController = MatchController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "publishMatchResult", null);
exports.MatchController = MatchController = __decorate([
    (0, common_1.Controller)('api/match'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], MatchController);
//# sourceMappingURL=match.controller.js.map