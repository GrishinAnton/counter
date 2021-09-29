import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { EntityModel } from './entity.model';

@Module({
  controllers: [EntityController],
  providers: [EntityService],
  imports: [SequelizeModule.forFeature([EntityModel])],
  exports: [EntityService],
})
export class EntityModule {}
