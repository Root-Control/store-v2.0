import { Model } from 'mongoose';
import { IUser } from '../../users/interfaces/user.interface';
import { ITwitterConfig } from '../interfaces/twitter-config.interface';
export declare class TwitterStrategy {
    private readonly twitterConfig;
    private readonly userModel;
    constructor(twitterConfig: ITwitterConfig, userModel: Model<IUser>);
    private init;
}
