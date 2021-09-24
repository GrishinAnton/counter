import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'test@test.ru', description: 'Почта пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Введите корректрый email' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(6, 8, { message: 'Мин длина пароля 6 символов, максимальная 8' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly password: string;
}
