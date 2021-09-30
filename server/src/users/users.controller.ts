import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModel } from './user.model';

@ApiTags('Пользователь')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // @ApiOperation({ summary: 'Создание пользователя' })
  // @ApiResponse({ status: 200, type: UserModel })
  // @Post()
  // create(@Body() userDto: CreateUserDto) {
  //   return this.userService.createUser(userDto);
  // }
}
