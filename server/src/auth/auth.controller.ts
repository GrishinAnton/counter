import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthUserResponseDto } from './dto/register-user.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiResponse({
    status: 200,
    type: AuthUserResponseDto,
  })
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  @ApiResponse({
    status: 200,
    type: AuthUserResponseDto,
  })
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
