import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { EntityModel } from './entity.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [EntityController],
  providers: [EntityService],
  imports: [SequelizeModule.forFeature([EntityModel]), AuthModule],
  exports: [EntityService],
})
export class EntityModule {}
