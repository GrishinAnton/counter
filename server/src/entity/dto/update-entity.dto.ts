import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';
import { EntityDto } from './entity.dto';

export class UpdatedEntityDto extends EntityDto {
  @ApiProperty({
    example: 'ID сущности',
    description: 'ID сущности',
  })
  @IsInt({ message: 'Должно быть числом' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly id: number;
}
