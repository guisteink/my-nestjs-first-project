import { Injectable } from '@nestjs/common'
import { IGenericRepository } from '../abstracts/generic-repository.abstract'
import { Assignor } from '../entities/assignor.entity'

@Injectable()
export class AssignorRepository implements IGenericRepository<Assignor> {
  getAll(): Promise<Assignor[]> {
    throw new Error('Method not implemented.')
  }

  get(id: string): Promise<Assignor> {
    throw new Error('Method not implemented.')
  }

  create(item: Assignor): Promise<Assignor> {
    throw new Error('Method not implemented.')
  }

  delete(item: Assignor): Promise<Assignor> {
    throw new Error('Method not implemented.')
  }

  update(id: string, item: Assignor) {
    throw new Error('Method not implemented.')
  }
}
