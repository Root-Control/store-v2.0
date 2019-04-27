import {
  UnauthorizedException,
  NestMiddleware, 
  Injectable, 
  Inject } from '@nestjs/common';
import { Request, Response } from 'express';
import { Model, Types } from 'mongoose';
import { IArticle } from '../../articles/interfaces/article.interface';
import { MESSAGES, ARTICLE_MODEL_TOKEN } from '../../../server.constants';

@Injectable()
/**
 *  Article By Id Middleware
 *  We validating if the Id provided is valid, and returning the found article in the variable req.article
 */
export class ArticleIdMiddleware implements NestMiddleware {
  constructor(@Inject(ARTICLE_MODEL_TOKEN) private readonly articleModel: Model<IArticle>) {}
  async use(req, res, next: Function) {
      if(!Types.ObjectId.isValid(req.params.articleId)) return next(new UnauthorizedException('Invalid identifier'));
      const article = await this.articleModel.findById(req.params.articleId);
      if (article) {
        req.article = article;
        next();
      }
      else return next(new UnauthorizedException('No article with that identifier has been found'));
  }
}
