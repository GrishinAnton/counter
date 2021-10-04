import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IUser } from 'src/users/dto/user.dto';
import { CreateEntityWithUserIdDto } from './dto/create-entity.dto';
import { UpdatedEntityDto } from './dto/update-entity.dto';
import { EntityModel } from './entity.model';

interface IGetEntities extends IUser {}

interface IGetEntityById extends IUser {
  entityId: string;
}

interface IUpdateEntity extends IUser {
  entity: UpdatedEntityDto;
}

@Injectable()
export class EntityService {
  constructor(
    @InjectModel(EntityModel) private entityRepository: typeof EntityModel,
  ) {}

  async createEntity(entityDto: CreateEntityWithUserIdDto) {
    const entity = await this.entityRepository.create(entityDto);
    return entity;
  }

  async getEntities({ userId }: IGetEntities) {
    const entities = await this.entityRepository.findAll({ where: { userId } });
    return entities;
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
    const updatedEntity = await this.entityRepository.update(entity, {
      where: { id: entity.id, userId },
    });
  }
}
