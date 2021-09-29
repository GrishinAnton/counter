import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateEntityDto {
  @ApiProperty({
    example: 'Названи сущности',
    description: 'Название сущности',
  })
  @IsString({ message: 'Должно быть строкой' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly name: string;
  @ApiProperty({
    example: '10.02.2021',
    description: 'Дата с которой сущности начинает работать',
  })
  @IsDateString({}, { message: 'Это должна быть дата' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly startDate: Date;
}
