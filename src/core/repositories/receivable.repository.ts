import { Injectable } from '@nestjs/common'
import { IGenericRepository } from '../abstracts/generic-repository.abstract'
import { Receivable } from '../entities/receivable.entity'

@Injectable()
export class ReceivableRepository implements IGenericRepository<Receivable> {
  private readonly receivables: Receivable[] = [];

  getAll(): Promise<Receivable[]> {
    return Promise.resolve(this.receivables);
  }

  get(id: string): Promise<Receivable> {
    const receivable = this.receivables.find(item => item.id === id);
    return Promise.resolve(receivable);
  }

  create(item: Receivable): Promise<Receivable> {
    this.receivables.push(item);
    return Promise.resolve(item);
  }

  delete(item: Receivable): Promise<Receivable> {
    const index = this.receivables.findIndex(receivable => receivable.id === item.id);
    if (index !== -1) {
      this.receivables.splice(index, 1);
    }
    return Promise.resolve(item);
  }

  update(id: string, item: Receivable) {
    const index = this.receivables.findIndex(receivable => receivable.id === id);
    if (index !== -1) {
      this.receivables[index] = item;
    }
    return Promise.resolve(item);
  }
}
