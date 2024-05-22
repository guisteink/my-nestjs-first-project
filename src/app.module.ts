import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PaymentsUseCasesModule } from './use-cases/integrations/payments/payments.module';
import { AssignorController } from './controllers/assignor.controller';
import { ReceivableController } from './controllers';
import { AssignorMiddleware, ReceivableMiddleware } from './midlewares';

@Module({
  imports: [PaymentsUseCasesModule],
  controllers: [
    AppController,
    AssignorController,
    ReceivableController
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AssignorMiddleware)
      .forRoutes(AssignorController);

    consumer
      .apply(ReceivableMiddleware)
      .forRoutes(ReceivableController);
  }
}
