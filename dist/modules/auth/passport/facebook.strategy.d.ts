import { Model } from 'mongoose';
import { IFacebookConfig } from '../interfaces/facebook-config.interface';
import { IUser } from '../../users/interfaces/user.interface';
export declare class FacebookStrategy {
    private readonly fbConfig;
    private readonly userModel;
    constructor(fbConfig: IFacebookConfig, userModel: Model<IUser>);
    private init;
}
