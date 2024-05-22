import { Module } from '@nestjs/common';
import { AssignorRepository, PayableRepository } from '../../../core/repositories';

@Module({
  imports: [],
  providers: [AssignorRepository, PayableRepository],
  exports: [AssignorRepository, PayableRepository],
})
export class PaymentsUseCasesModule {}
