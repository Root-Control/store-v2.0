import { Model } from 'mongoose';
import { IUser } from '../../users/interfaces/user.interface';
export declare class LocalStrategy {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    private init;
}
