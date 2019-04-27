import { NestMiddleware } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUser } from '../../users/interfaces/user.interface';
export declare class UserIdMiddleware implements NestMiddleware {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    use(req: any, res: any, next: Function): Promise<any>;
}
