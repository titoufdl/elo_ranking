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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const player_entity_1 = require("./model/player.entity");
let AppService = class AppService {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    addPlayer(player) {
        player_entity_1.Player.create(player).save().then(() => {
            this.notifyPlayerRankChange(player);
        });
    }
    updatePlayer(player) {
        player_entity_1.Player.update(player.id, player).then(() => {
            this.notifyPlayerRankChange(player);
        });
    }
    async getPlayers() {
        const players = await player_entity_1.Player.find({ order: { rank: 'DESC' } });
        return JSON.stringify(players);
    }
    async findPlayerById(id) {
        return await player_entity_1.Player.findOne({ where: { id: id } });
    }
    getEventEmitter() {
        return this.eventEmitter;
    }
    notifyPlayerRankChange(player) {
        this.eventEmitter.emit('RankingUpdate', player);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], AppService);
//# sourceMappingURL=app.service.js.map