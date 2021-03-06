import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationExceptions } from '../exceptions/validation.exceptions';

@Injectable()
export class ValidationPipes implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToClass(metadata.metatype, value);
    if (typeof obj === 'object') {
      const errors = await validate(obj);
      console.log(errors, 'errors');
      if (errors.length) {
        const messages = errors.map((err) => {
          return { [err.property]: Object.values(err.constraints).join(', ') };
        });

        throw new ValidationExceptions(messages);
      }
    }
    return value;
  }
}
