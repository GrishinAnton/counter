import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { EntityModel } from './entity.model';
import { AuthModule } from 'src/auth/auth.module';
import { UserModel } from 'src/users/user.model';

@Module({
  controllers: [EntityController],
  providers: [EntityService],
  imports: [SequelizeModule.forFeature([EntityModel, UserModel]), AuthModule],
  exports: [EntityService],
})
export class EntityModule {}
