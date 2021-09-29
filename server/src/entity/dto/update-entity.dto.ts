import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateEntityDto } from "./create-entity.dto";

export class UpdatedEntityDto extends CreateEntityDto {
  @ApiProperty({
    example: 'ID сущности',
    description: 'ID сущности',
  })
  @IsString({ message: 'Должно быть строкой' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly id: number;
}