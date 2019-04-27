"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const articles_module_1 = require("./modules/articles/articles.module");
const database_1 = require("./database");
const app_gateway_1 = require("./app.gateway");
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const token_middleware_1 = require("./common/middlewares/token.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        console.log('conchasumare');
        consumer
            .apply(logger_middleware_1.LoggerMiddleware, token_middleware_1.TokenMiddleware)
            .forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            articles_module_1.ArticlesModule
        ],
        controllers: [],
        providers: [
            app_gateway_1.AppGateway
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map