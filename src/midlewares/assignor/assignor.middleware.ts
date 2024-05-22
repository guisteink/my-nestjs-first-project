import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AssignorRepository } from '../../core/repositories/assignor.repository';

@Injectable()
export class AssignorMiddleware implements NestMiddleware {
  constructor(private readonly assignorRepository: AssignorRepository) {}

  async use(req: Request, res: Response, next: NextFunction) {
    console.log("Passou pelo Assignor middleware")
    next();
  }
}
