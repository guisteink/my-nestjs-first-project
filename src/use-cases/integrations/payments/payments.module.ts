import { Module } from '@nestjs/common';
import { AssignorRepository, ReceivableRepository } from '../../../core/repositories';

@Module({
  imports: [],
  providers: [AssignorRepository, ReceivableRepository],
  exports: [AssignorRepository, ReceivableRepository],
})
export class PaymentsUseCasesModule {}
