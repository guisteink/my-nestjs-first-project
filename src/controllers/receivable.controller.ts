import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Receivable } from '../core/entities/receivable.entity';
import { ReceivableRepository } from '../core/repositories/receivable.repository';

@Controller('api/receivable')
export class ReceivableController {
  constructor(private readonly receivableRepository: ReceivableRepository) {}

  @Get()
  async getAll(): Promise<Receivable[]> {
    return this.receivableRepository.getAll();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Receivable> {
    return this.receivableRepository.get(id);
  }

  @Post()
  async create(@Body() receivable: Receivable): Promise<Receivable> {
    return this.receivableRepository.create(receivable);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() receivable: Receivable): Promise<any> {
    return this.receivableRepository.update(id, receivable);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Receivable> {
    const receivable = await this.receivableRepository.get(id);
    return this.receivableRepository.delete(receivable);
  }
}
