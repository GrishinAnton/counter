import { IsNotEmpty, IsString } from 'class-validator';
import { EntityDto } from './entity.dto';

export class CreateEntityDto extends EntityDto {}

export class CreateEntityWithUserIdDto extends CreateEntityDto {
  @IsString({ message: 'Должно быть строкой' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  readonly userId: number;
}
