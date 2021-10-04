import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { EntityDto } from './entity.dto';

export class GetEntityDto extends EntityDto {
  @ApiProperty({
    example: '2',
    description: 'ID сущности',
  })
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;
}
