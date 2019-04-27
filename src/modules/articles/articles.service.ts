import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';

import { ARTICLE_MODEL_TOKEN, SERVER_CONFIG } from '../../server.constants';
import { IArticle } from './interfaces/article.interface';
import { isEmptyObject } from '../../common/helpers/utils';

import { parseImageURL } from '../../common/helpers/converters';
import { getErrorMessage } from '../../common/helpers/error-handler';

@Injectable()
export class ArticlesService {
  constructor(@Inject(ARTICLE_MODEL_TOKEN) private readonly articleModel: Model<IArticle>) {}

  async create(article) {
    try {
      return await this.articleModel.create(article);
    } catch (ex) {
      throw new HttpException(getErrorMessage(ex), HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  async list() {
    try {
      return await this.articleModel.find();
    } catch (ex) {
      throw new HttpException(getErrorMessage(ex), HttpStatus.UNPROCESSABLE_ENTITY);
    }    
  }

  async update(article, body) {
  	article.title = body.title;
  	article.content = body.content;
    try {
      return await article.save();
    } catch (ex) {
      throw new HttpException(getErrorMessage(ex), HttpStatus.UNPROCESSABLE_ENTITY);
    }  
  }

  async patch(article, body) {
    try {
      return await article.updateAttributes(body);
    } catch (ex) {
      throw new HttpException(getErrorMessage(ex), HttpStatus.UNPROCESSABLE_ENTITY);
    }     
  }

  async delete(article) {
    try {
      return await article.remove();
    } catch (ex) {
      throw new HttpException(getErrorMessage(ex), HttpStatus.UNPROCESSABLE_ENTITY);
    }      
  }
}
