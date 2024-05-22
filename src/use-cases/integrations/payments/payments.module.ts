import { Module } from '@nestjs/common';
import { AssignorRepository } from '../../../core/repositories/assignor.repository'; // Importe o AssignorRepository

@Module({
  imports: [],
  providers: [AssignorRepository], // Forneça o AssignorRepository aqui
  exports: [AssignorRepository], // Exporte o AssignorRepository para que possa ser acessado por outros módulos
})
export class PaymentsUseCasesModule {}
