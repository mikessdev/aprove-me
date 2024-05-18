import { Controller, Get } from '@nestjs/common';

@Controller()
export class IntegrationController {
  @Get()
  getHello(): string {
    return 'integrations';
  }
}
