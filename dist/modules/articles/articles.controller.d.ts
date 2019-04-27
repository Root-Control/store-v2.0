import { ArticlesService } from './articles.service';
import { ArticlesGateway } from '../articles/articles.gateway';
export declare class ArticlesController {
    private readonly articlesService;
    private readonly articlesSocket;
    constructor(articlesService: ArticlesService, articlesSocket: ArticlesGateway);
    list(req: any): Promise<import("./interfaces/article.interface").IArticle[]>;
    create(req: any): Promise<any>;
    getArticleById(req: any): Promise<any>;
    updateArticleById(req: any): Promise<any>;
    patchArticleById(req: any): Promise<any>;
    deleteArticle(req: any): Promise<any>;
}
