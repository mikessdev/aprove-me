import { Module } from '@nestjs/common';
import { AppController } from '@controllers/app.controller';
import { AppService } from '@services/app.service';
import { IntegrationModule } from './integration.module';
import { PayableModule } from './payable.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    IntegrationModule,
    PayableModule,
    RouterModule.register([
      {
        path: '/integrations',
        module: IntegrationModule,
        children: [
          {
            path: '/payable',
            module: PayableModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
