import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ReceivableRepository } from '../../core/repositories/receivable.repository';

@Injectable()
export class ReceivableMiddleware implements NestMiddleware {
  constructor(private readonly receivableRepository: ReceivableRepository) {}

  async use(req: Request, res: Response, next: NextFunction) {
    console.log("Passou pelo Receivable middleware")
    next();
  }
}
