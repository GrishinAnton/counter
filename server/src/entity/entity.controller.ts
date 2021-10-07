import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { EntityService } from './entity.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdatedEntityDto } from './dto/update-entity.dto';
import { ITokenUser, JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetEntityDto } from './dto/get-entity.dto';

@ApiTags('Сущность')
@Controller('entity')
export class EntityController {
  constructor(private entityService: EntityService) {}

  @ApiOperation({ summary: 'Создание сущности' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    type: GetEntityDto,
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  createEntity(@Body() entityDto: CreateEntityDto, @Req() request: any) {
    const user: ITokenUser = request.user;

    const entity = {
      ...entityDto,
      userId: user.id,
    };

    return this.entityService.createEntity(entity);
  }

  @ApiOperation({ summary: 'Получение всех сущностей пользователя' })
  @ApiResponse({
    status: 200,
    type: GetEntityDto,
    isArray: true,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  getEntities(@Req() request: any) {
    const user: ITokenUser = request.user;
    return this.entityService.getEntities({ userId: user.id });
  }

  @ApiOperation({ summary: 'Получение одной сущности' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    type: GetEntityDto,
    description: 'Cущность пользователя',
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getEntityById(@Param('id') id: string, @Req() request: any) {
    const user: ITokenUser = request.user;
    return this.entityService.getEntityById({ entityId: id, userId: user.id });
  }

  @ApiOperation({ summary: 'Обновление сущности' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'Сущность обнавлена',
  })
  @UseGuards(JwtAuthGuard)
  @Put()
  updateEntity(@Body() entityDto: UpdatedEntityDto, @Req() request: any) {
    const user: ITokenUser = request.user;
    return this.entityService.updateEntity({
      entity: entityDto,
      userId: user.id,
    });
  }
}
