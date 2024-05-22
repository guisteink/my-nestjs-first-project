import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreateReceivableDto } from '../../core/dtos/receivable.dto';

@Injectable()
export class ReceivableValidatorMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'POST') {
      const createReceivableDto = plainToClass(CreateReceivableDto, req.body);
      const errors = await validate(createReceivableDto);
      if (errors.length > 0) {
        const validationErrors = errors.map(error => Object.values(error.constraints)).flat();
        throw new HttpException(validationErrors, HttpStatus.BAD_REQUEST);
      }
    }
    next();
  }
}
