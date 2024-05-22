import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Payable } from '../core/entities/payable.entity';
import { PayableRepository } from '../core/repositories/payable.repository';

@Controller('api/Payable')
export class PayableController {
  constructor(private readonly PayableRepository: PayableRepository) {}

  @Get()
  async getAll(): Promise<Payable[]> {
    return this.PayableRepository.getAll();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Payable> {
    return this.PayableRepository.get(id);
  }

  @Post()
  async create(@Body() Payable: Payable): Promise<Payable> {
    return this.PayableRepository.create(Payable);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() Payable: Payable): Promise<any> {
    return this.PayableRepository.update(id, Payable);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Payable> {
    const Payable = await this.PayableRepository.get(id);
    return this.PayableRepository.delete(Payable);
  }
}
