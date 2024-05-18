import { Controller, Get } from '@nestjs/common';

@Controller()
export class PayableController {
  @Get()
  getHello(): string {
    return 'payable';
  }
}
