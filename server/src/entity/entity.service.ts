import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdatedEntityDto } from './dto/update-entity.dto';
import { EntityModel } from './entity.model';

@Injectable()
export class EntityService {
  constructor(
    @InjectModel(EntityModel) private entityRepository: typeof EntityModel,
  ) {}

  async createEntity(entityDto: CreateEntityDto) {
    const entity = await this.entityRepository.create(entityDto);
    return entity;
  }

  async getEntities() {
    const entities = await this.entityRepository.findAll();
    return entities;
  }

  async getEntityById(id: string) {
    const entity = await this.entityRepository.findOne({ where: { id } });
    if (!entity) {
      throw new HttpException(
        'Такой сущности не существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    return entity;
  }

  async updateEntity(entityDto: UpdatedEntityDto) {
    const updatedEntity = await this.entityRepository.update(entityDto, {
      where: { id: entityDto.id },
    });
  }
}
