import { GetEntityDto } from 'api';
import { IEntityFields, IViewEntityFields } from 'common/types/entity.types';

export class EntityFactory {
  static viewEntityTransform(entity: GetEntityDto): IEntityFields | IViewEntityFields {
    const entityTransform: IEntityFields = {
      ...entity,
      value: String(entity.value),
      startDate: new Date(entity.startDate),
      finishDate: entity.finishDate ? new Date(entity.finishDate) : null,
    };

    return entityTransform;
  }
}
