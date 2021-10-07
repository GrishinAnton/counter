import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { UserModel } from 'src/users/user.model';

export enum EEntityAction {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export interface IEntityCreation {
  name: string;
  startDate: Date;
  finishDate?: Date | undefined;
  time: boolean;
  startValue: string;
  action: EEntityAction;
  userId: number;
}

@Table({ tableName: 'entity' })
export class EntityModel extends Model<EntityModel, IEntityCreation> {
  @ApiProperty({ example: '1', description: 'Идентификатор сущности' })
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Название сущности',
    description: 'Название сущности',
  })
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: '14.03.2021',
    description: 'Дата с которой начинает действовать сущность',
  })
  @Column({
    type: DataTypes.DATE,
    allowNull: false,
  })
  startDate: Date;

  @ApiProperty({
    example: '10.02.2021',
    description: 'Дата когда сущности заканчивает работать',
  })
  @Column({
    type: DataTypes.DATE,
    allowNull: true,
  })
  finishDate: Date;

  @ApiProperty({
    example: true,
    description: 'Учитывать время в дате или нет',
  })
  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  })
  readonly time: boolean;

  @ApiProperty({
    example: '2',
    description: 'Стартовае значение сущности',
  })
  @Column({
    type: DataTypes.STRING,
    defaultValue: '0',
    allowNull: false,
  })
  readonly startValue: string;

  @ApiProperty({
    example: EEntityAction.DECREMENT,
    description: 'Увеличиваем или уменьшем значение сущности',
  })
  @Column({
    type: DataTypes.STRING,
    defaultValue: EEntityAction.INCREMENT,
    allowNull: false,
  })
  readonly action: EEntityAction;

  @ForeignKey(() => UserModel)
  @Column
  userId: number;

  @BelongsTo(() => UserModel)
  user: UserModel;
}
