import { Module } from '@nestjs/common';
import { AppController } from '@controllers/app.controller';
import { PayableModule } from '@modules/payable.module';
import { IntegrationController } from '@controllers/integration.controller';

@Module({
  imports: [PayableModule],
  controllers: [IntegrationController],
})
export class IntegrationModule {}
