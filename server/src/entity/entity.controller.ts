import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { EntityService } from './entity.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdatedEntityDto } from './dto/update-entity.dto';

@ApiTags('Сущность')
@Controller('entity')
export class EntityController {
  constructor(private entityService: EntityService) {}

  @ApiOperation({ summary: 'Создание сущности' })
  @Post()
  createEntity(@Body() entityDto: CreateEntityDto) {
    return this.entityService.createEntity(entityDto);
  }

  @ApiOperation({ summary: 'Получение всех сущностей' })
  @Get()
  getEntities() {
    return this.entityService.getEntities();
  }

  @ApiOperation({ summary: 'Получение одной сущности' })
  @Get(':id')
  getEntityById(@Param('id') id: string) {
    return this.entityService.getEntityById(id);
  }

  @ApiOperation({ summary: 'Обновление сущности' })
  @Put()
  updateEntity(@Body() entityDto: UpdatedEntityDto) {
    return this.entityService.updateEntity(entityDto);
  }
}
