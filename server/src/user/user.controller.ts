import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './schema/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  getUser(@Param('username') username: string): Promise<User> {
    return this.userService.getUser(username);
  }

  @Post('registerUser')
  async registerUser(@Body() userDto: UserDto): Promise<User> {
    const userRecord = await this.userService.saveUser(userDto);
    return userRecord;
  }
}
