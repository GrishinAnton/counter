import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { EntityService } from './entity.service';
import { CreateEntityDto } from './dto/create-entity.dto';

@ApiTags('Сущность')
@Controller('entity')
export class EntityController {
  constructor(private entityService: EntityService) {}

  @ApiOperation({ summary: 'Создание сущности' })
  @Post()
  createEntity(@Body() entityDto: CreateEntityDto) {
    return this.entityService.createEntity(entityDto);
  }

  @ApiOperation({summary: 'Получение всех сущностей'})
  @Get()
  getEntities(){
    return this.entityService.getEntities()
  }
}
