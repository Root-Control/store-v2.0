import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    me(userModel: IUser): Promise<IUser>;
    getUsers(query?: any): Promise<IUser[]>;
    updateProfileImage(user: any, file: any): Promise<IUser>;
    getUserById(userId: any): Promise<IUser>;
    deleteUser(user: any): Promise<any>;
    updateUser(user: any, body: any): Promise<any>;
}
