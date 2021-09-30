import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { EntityService } from './entity.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdatedEntityDto } from './dto/update-entity.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Сущность')
@Controller('entity')
export class EntityController {
  constructor(private entityService: EntityService) {}

  @ApiOperation({ summary: 'Создание сущности' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  createEntity(@Body() entityDto: CreateEntityDto) {
    return this.entityService.createEntity(entityDto);
  }

  @ApiOperation({ summary: 'Получение всех сущностей' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  getEntities() {
    return this.entityService.getEntities();
  }

  @ApiOperation({ summary: 'Получение одной сущности' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getEntityById(@Param('id') id: string) {
    return this.entityService.getEntityById(id);
  }

  @ApiOperation({ summary: 'Обновление сущности' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put()
  updateEntity(@Body() entityDto: UpdatedEntityDto) {
    return this.entityService.updateEntity(entityDto);
  }
}
