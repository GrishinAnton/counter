import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { UserModel } from './users/user.model';
import { AuthModule } from './auth/auth.module';
import { EntityModel } from './entity/entity.model';
import { EntityModule } from './entity/entity.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserModel, EntityModel],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    EntityModule,
  ],
})
export class AppModule {}
