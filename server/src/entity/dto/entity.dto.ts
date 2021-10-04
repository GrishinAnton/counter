import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { EEntityAction } from '../entity.model';

export class EntityDto {
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

  @ApiProperty({
    example: '10.02.2021',
    description: 'Дата когда сущности заканчивает работать',
  })
  @IsDateString({}, { message: 'Это должна быть дата' })
  readonly finishDate: Date;

  @ApiProperty({
    example: true,
    description: 'Учитывать время в дате или нет',
  })
  @IsBoolean({
    message: 'Это булево поле',
  })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly time: boolean;

  @ApiProperty({
    example: '2',
    description: 'Стартовае значение сущности',
  })
  @IsString({
    message: 'Это должна быть строка',
  })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly startValue: string;

  @ApiProperty({
    example: EEntityAction.DECREMENT,
    description: 'Увеличиваем или уменьшем значение сущности',
    enum: EEntityAction,
  })
  @IsEnum(EEntityAction, {
    message: 'Не соответствет валидации',
  })
  @IsNotEmpty({
    message: 'Это обязательное поле',
  })
  readonly action: EEntityAction;
}
