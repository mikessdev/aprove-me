import { Module } from '@nestjs/common';
import { PayableController } from '@controllers/payable.controller';

@Module({
  imports: [],
  controllers: [PayableController],
})
export class PayableModule {}
