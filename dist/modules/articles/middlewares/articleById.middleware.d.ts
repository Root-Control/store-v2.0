import { NestMiddleware } from '@nestjs/common';
import { Model } from 'mongoose';
import { IArticle } from '../../articles/interfaces/article.interface';
export declare class ArticleIdMiddleware implements NestMiddleware {
    private readonly articleModel;
    constructor(articleModel: Model<IArticle>);
    use(req: any, res: any, next: Function): Promise<any>;
}
