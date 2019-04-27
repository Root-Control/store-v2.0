import { Model } from 'mongoose';
import { IGoogleConfig } from '../interfaces/google-config.interface';
import { IUser } from '../../users/interfaces/user.interface';
export declare class GoogleStrategy {
    private readonly googleConfig;
    private readonly userModel;
    constructor(googleConfig: IGoogleConfig, userModel: Model<IUser>);
    private init;
}
