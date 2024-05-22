import { Injectable } from '@nestjs/common'
import { IGenericRepository } from '../abstracts/generic-repository.abstract'
import { Payable } from '../entities/payable.entity'

@Injectable()
export class PayableRepository implements IGenericRepository<Payable> {
  private readonly Payables: Payable[] = [];

  getAll(): Promise<Payable[]> {
    return Promise.resolve(this.Payables);
  }

  get(id: string): Promise<Payable> {
    const Payable = this.Payables.find(item => item.id === id);
    return Promise.resolve(Payable);
  }

  create(item: Payable): Promise<Payable> {
    this.Payables.push(item);
    return Promise.resolve(item);
  }

  delete(item: Payable): Promise<Payable> {
    const index = this.Payables.findIndex(Payable => Payable.id === item.id);
    if (index !== -1) {
      this.Payables.splice(index, 1);
    }
    return Promise.resolve(item);
  }

  update(id: string, item: Payable) {
    const index = this.Payables.findIndex(Payable => Payable.id === id);
    if (index !== -1) {
      this.Payables[index] = item;
    }
    return Promise.resolve(item);
  }
}
