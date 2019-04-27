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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const server_constants_1 = require("../../../server.constants");
let UserIdMiddleware = class UserIdMiddleware {
    constructor(userModel) {
        this.userModel = userModel;
    }
    use(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const allowedRoutes = ['me', 'upload'];
            const isAllowedRoute = (allowedRoutes.indexOf(req.params.id) > -1);
            if (isAllowedRoute)
                return next();
            else if (!mongoose_1.Types.ObjectId.isValid(req.params.id))
                return next(new common_1.UnauthorizedException('User is invalid'));
            const user = yield this.userModel.findById(req.params.id).select('-local.salt  -local.hashedPassword');
            if (user) {
                req.model = user;
                next();
            }
            else
                return next(new common_1.UnauthorizedException('No user with that identifier has been found'));
        });
    }
    ;
};
UserIdMiddleware = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(server_constants_1.USER_MODEL_TOKEN)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserIdMiddleware);
exports.UserIdMiddleware = UserIdMiddleware;
//# sourceMappingURL=userbyId.middleware.js.map