import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PaymentsUseCasesModule } from './use-cases/integrations/payments/payments.module';
import { AssignorController } from './controllers/assignor.controller';
import { PayableController } from './controllers';
import { AssignorMiddleware, PayableMiddleware } from './midlewares/validators';

@Module({
  imports: [PaymentsUseCasesModule],
  controllers: [
    AppController,
    AssignorController,
    PayableController
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AssignorMiddleware)
      .forRoutes(AssignorController);

    consumer
      .apply(PayableMiddleware)
      .forRoutes(PayableController);
  }
}
