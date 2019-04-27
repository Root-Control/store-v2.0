import { Injectable, NestMiddleware, Inject } from '@nestjs/common';
import { Request, Response } from 'express';

import * as chalk from 'chalk';
import { Model } from 'mongoose';
import { verify } from 'jsonwebtoken';

import { USER_MODEL_TOKEN, SERVER_CONFIG } from '../../server.constants';
import { IUser } from '../../modules/users/interfaces/user.interface';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
	constructor(@Inject(USER_MODEL_TOKEN) private readonly userModel: Model<IUser>) {}
	async use(req: Request, res: Response, next: Function) {
		req.user = {};
		let parsedToken = {};
		const token: any = req.headers.authorization || req.headers.Authorization;
		if (token) {
			try {
				parsedToken = verify(token, SERVER_CONFIG.jwtSecret);
				req.user =  await this.userModel.findById(parsedToken['_id']).select('-local.salt -local.hashedPassword');
			} catch (ex) {
				return res.status(500).send(ex);
			}
		}
		next();
	}
}