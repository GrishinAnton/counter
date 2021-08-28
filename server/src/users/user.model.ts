import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface IUserCreation {
  email: string;
  password: string;
}

@Table({ tableName: 'user' })
export class UserModel extends Model<UserModel, IUserCreation> {
  @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'test@test.ru', description: 'Почта пользователя' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль пользователя' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
}
