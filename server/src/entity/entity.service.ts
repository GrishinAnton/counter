import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IUser } from 'src/users/dto/user.dto';
import { CreateEntityWithUserIdDto } from './dto/create-entity.dto';
import { UpdatedEntityDto } from './dto/update-entity.dto';
import { EntityModel } from './entity.model';

interface IGetEntityById extends IUser {
  entityId: string;
}

interface IUpdateEntity extends IUser {
  entity: UpdatedEntityDto;
}

interface IUpdateEntityAction extends IUser {
  id: number;
}

@Injectable()
export class EntityService {
  constructor(
    @InjectModel(EntityModel) private entityRepository: typeof EntityModel,
  ) {}

  async createEntity(entityDto: CreateEntityWithUserIdDto) {
    return await this.entityRepository.create(entityDto);
  }

  async getEntities({ userId }: IUser) {
    return await this.entityRepository.findAll({ where: { userId } });
  }

  async getEntityById({ entityId, userId }: IGetEntityById) {
    const entity = await this.entityRepository.findOne({
      where: { id: entityId, userId },
    });
    if (!entity) {
      throw new HttpException(
        'Такой сущности не существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    return entity;
  }

  async updateEntity({ entity, userId }: IUpdateEntity) {
    const candidate = await this.entityRepository.findOne({
      where: { id: entity.id, userId },
    });

    if (!candidate) {
      throw new HttpException(
        'Такой сущности не существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.entityRepository.update(entity, {
      where: { id: entity.id, userId },
    });
  }

  async updateEntityIncrement({ id, userId }: IUpdateEntityAction) {
    const entity = await this.entityRepository.findOne({
      where: { id, userId },
    });
    if (entity) {
      entity.startValue = String(Number(entity.startValue) + 1);
      await entity.save();
    } else {
      throw new HttpException(
        'Такой сущности не существует',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updateEntityDecrement({ id, userId }: IUpdateEntityAction) {
    const entity = await this.entityRepository.findOne({
      where: { id, userId },
    });
    if (entity) {
      entity.startValue = String(Number(entity.startValue) - 1);
      await entity.save();
    } else {
      throw new HttpException(
        'Такой сущности не существует',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
