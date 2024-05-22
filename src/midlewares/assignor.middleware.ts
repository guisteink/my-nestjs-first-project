import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreateAssignorDto } from '../core/dtos/assignor.dto';

@Injectable()
export class AssignorMiddleware implements NestMiddleware {

  async use(req: Request, res: Response, next: NextFunction) {
    console.log("Passou pelo Assignor middleware");

    if (req.method === 'POST') {
      const createAssignorDto = plainToClass(CreateAssignorDto, req.body);
      const errors = await validate(createAssignorDto);
      if (errors.length > 0) {
        const validationErrors = errors.map(error => Object.values(error.constraints)).flat();
        throw new HttpException(validationErrors, HttpStatus.BAD_REQUEST);
      }
    }

    next();
  }
}
