import { IsNotEmpty, IsNumber } from 'class-validator';
import { EntityDto } from './entity.dto';

export class CreateEntityDto extends EntityDto {}

export class CreateEntityWithUserIdDto extends CreateEntityDto {
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly userId: number;
}
