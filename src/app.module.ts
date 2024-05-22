import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PaymentsUseCasesModule } from './use-cases/integrations/payments/payments.module';
import { AssignorController } from './controllers/assignor.controller';
import { ReceivableController } from './controllers';
@Module({
  imports: [PaymentsUseCasesModule],
  controllers: [
    AppController,
    AssignorController,
    ReceivableController
  ],
  providers: [],
})
export class AppModule {}
