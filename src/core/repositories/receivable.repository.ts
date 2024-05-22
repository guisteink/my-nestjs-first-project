import { Injectable } from '@nestjs/common'
import { IGenericRepository } from '../abstracts/generic-repository.abstract'
import { Receivable } from '../entities/receivable.entity'

@Injectable()
export class ReceivableRepository implements IGenericRepository<Receivable> {
  getAll(): Promise<Receivable[]> {
    throw new Error('Method not implemented.')
  }

  get(id: string): Promise<Receivable> {
    throw new Error('Method not implemented.')
  }

  create(item: Receivable): Promise<Receivable> {
    throw new Error('Method not implemented.')
  }

  delete(item: Receivable): Promise<Receivable> {
    throw new Error('Method not implemented.')
  }

  update(id: string, item: Receivable) {
    throw new Error('Method not implemented.')
  }
}
