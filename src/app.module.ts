import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsUseCasesModule } from './use-cases/integrations/payments/payments.module'; // Importe o PaymentsUseCasesModule
import { AssignorController } from './controllers/assignor.controller'; // Importe o AssignorController

@Module({
  imports: [PaymentsUseCasesModule], // Importe o PaymentsUseCasesModule aqui
  controllers: [
    AppController,
    AssignorController,
  ],
  providers: [AppService],
})
export class AppModule {}
