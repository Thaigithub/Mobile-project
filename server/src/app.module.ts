import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ENV_VARIABLES } from './config/constant';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { HomerentModule } from './homerent/homerent.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    HomerentModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
