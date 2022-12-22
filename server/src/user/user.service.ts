import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser, User } from './schema/user.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('users')
    private readonly userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {}

  async saveUser(user: IUser): Promise<User> {
    const oldUser = await this.getUser(user.username);
    if (oldUser) {
      throw new HttpException('User has already existed', HttpStatus.FORBIDDEN);
    }
    const userRecord: User = await new this.userModel(user).save();
    return userRecord;
  }

  async getUser(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).lean();
  }
}
