import { Controller, Get, Post, Put, Delete, Param, Body, HttpStatus, HttpException } from '@nestjs/common';
import { Assignor } from '../core/entities/assignor.entity';
import { AssignorRepository } from '../core/repositories/assignor.repository';

@Controller('api/assignors')
export class AssignorController {
  constructor(private readonly assignorRepository: AssignorRepository) {}

  @Get()
  async getAll(): Promise<Assignor[]> {
    try {
      const assignors = await this.assignorRepository.getAll();
      return assignors;
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Assignor> {
    try {
      const assignor = await this.assignorRepository.get(id);
      if (!assignor) {
        throw new HttpException('Assignor not found', HttpStatus.NOT_FOUND);
      }
      return assignor;
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async create(@Body() assignor: Assignor): Promise<Assignor> {
    try {
      return await this.assignorRepository.create(assignor);
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() assignor: Assignor): Promise<any> {
    try {
      return await this.assignorRepository.update(id, assignor);
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Assignor> {
    try {
      const assignor = await this.assignorRepository.get(id);
      if (!assignor) {
        throw new HttpException('Assignor not found', HttpStatus.NOT_FOUND);
      }
      return await this.assignorRepository.delete(assignor);
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
