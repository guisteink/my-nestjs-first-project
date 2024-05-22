import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Assignor } from '../core/entities/assignor.entity';
import { AssignorRepository } from '../core/repositories/assignor.repository';

@Controller('api/assignors')
export class AssignorController {
  constructor(private readonly assignorRepository: AssignorRepository) {}

  @Get()
  async getAll(): Promise<Assignor[]> {
    return this.assignorRepository.getAll();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Assignor> {
    return this.assignorRepository.get(id);
  }

  @Post()
  async create(@Body() assignor: Assignor): Promise<Assignor> {
    return this.assignorRepository.create(assignor);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() assignor: Assignor): Promise<void> {
    return this.assignorRepository.update(id, assignor);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Assignor> {
    const assignor = await this.assignorRepository.get(id);
    return this.assignorRepository.delete(assignor);
  }
}
