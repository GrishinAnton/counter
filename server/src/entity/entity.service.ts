import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEntityDto } from './dto/create-entity.dto';
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

  async getEntities (){
    const entities = await this.entityRepository.findAll()
    console.log(entities);

    return entities
  }
}
