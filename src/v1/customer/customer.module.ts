import { Module } from '@nestjs/common';
import { CustomerController } from './controller/customer.controller';
import { CustomerRepository } from './infra/customer.repository';
import { CustomerService } from './service/customer.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository]
})
export class CustomerModule {}
