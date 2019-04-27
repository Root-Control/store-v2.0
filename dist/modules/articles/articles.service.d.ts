import { Model } from 'mongoose';
import { IArticle } from './interfaces/article.interface';
export declare class ArticlesService {
    private readonly articleModel;
    constructor(articleModel: Model<IArticle>);
    create(article: any): Promise<IArticle>;
    list(): Promise<IArticle[]>;
    update(article: any, body: any): Promise<any>;
    patch(article: any, body: any): Promise<any>;
    delete(article: any): Promise<any>;
}
