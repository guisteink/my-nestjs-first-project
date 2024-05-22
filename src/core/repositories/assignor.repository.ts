import { Injectable } from '@nestjs/common';
import { IGenericRepository } from '../abstracts/generic-repository.abstract';
import { Assignor } from '../entities/assignor.entity';

@Injectable()
export class AssignorRepository implements IGenericRepository<Assignor> {
  private readonly assignors: Assignor[] = [];

  getAll(): Promise<Assignor[]> {
    return Promise.resolve(this.assignors);
  }

  get(id: string): Promise<Assignor> {
    const assignor = this.assignors.find(assignor => assignor.id === id);
    return Promise.resolve(assignor);
  }

  create(item: Assignor): Promise<Assignor> {
    this.assignors.push(item);
    return Promise.resolve(item);
  }

  delete(item: Assignor): Promise<Assignor> {
    const index = this.assignors.findIndex(assignor => assignor.id === item.id);
    if (index !== -1) {
      this.assignors.splice(index, 1);
    }
    return Promise.resolve(item);
  }

  update(id: string, item: Assignor): Promise<Assignor> {
    const index = this.assignors.findIndex(assignor => assignor.id === id);
    if (index !== -1) {
      this.assignors[index] = item;
    }
    return Promise.resolve(item);
  }
}
