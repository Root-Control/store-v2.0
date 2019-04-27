// Nest
import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';

// Modules
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ArticlesModule } from './modules/articles/articles.module';

//  Database import
import { DatabaseModule } from './database';

//  Gateway sockets
import { AppGateway } from './app.gateway';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { TokenMiddleware } from './common/middlewares/token.middleware';

@Module({
	imports: [
		DatabaseModule,
		AuthModule,
		UsersModule,
		ArticlesModule
	],
	controllers: [
	],
	providers: [
		AppGateway
	]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  	console.log('conchasumare');
    consumer
      .apply(LoggerMiddleware, TokenMiddleware)
      .forRoutes('*');
  }
}