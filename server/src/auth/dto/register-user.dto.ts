import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from '../../users/dto/create-user.dto';

export class AuthUserResponseDto extends CreateUserDto {
  @ApiProperty({ example: 'token', description: 'Токен пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly token: string;
}
