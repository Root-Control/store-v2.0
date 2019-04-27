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
const server_constants_1 = require("../../server.constants");
const error_handler_1 = require("../../common/helpers/error-handler");
let ArticlesService = class ArticlesService {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    create(article) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.articleModel.create(article);
            }
            catch (ex) {
                throw new common_1.HttpException(error_handler_1.getErrorMessage(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.articleModel.find();
            }
            catch (ex) {
                throw new common_1.HttpException(error_handler_1.getErrorMessage(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        });
    }
    update(article, body) {
        return __awaiter(this, void 0, void 0, function* () {
            article.title = body.title;
            article.content = body.content;
            try {
                return yield article.save();
            }
            catch (ex) {
                throw new common_1.HttpException(error_handler_1.getErrorMessage(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        });
    }
    patch(article, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield article.updateAttributes(body);
            }
            catch (ex) {
                throw new common_1.HttpException(error_handler_1.getErrorMessage(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        });
    }
    delete(article) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield article.remove();
            }
            catch (ex) {
                throw new common_1.HttpException(error_handler_1.getErrorMessage(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        });
    }
};
ArticlesService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(server_constants_1.ARTICLE_MODEL_TOKEN)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map