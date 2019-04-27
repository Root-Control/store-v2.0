import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { IUser } from '../../modules/users/interfaces/user.interface';
export declare class TokenMiddleware implements NestMiddleware {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    use(req: Request, res: Response, next: Function): Promise<import("express-serve-static-core").Response>;
}
