import { Column, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';

enum EEntityAction {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

interface IEntityCreation {
  name: string;
  startDate: Date;
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
  })
  startDate: Date;

  // endDate: Date | null,
  // time: boolean
  // startValue: string
  // action: EEntityAction;
}

// name: '',
//   startDate: new Date(),
//   endDate: null,
//   time: false,
//   startValue: '',
//   action: EEntityAction.INCREMENT,
