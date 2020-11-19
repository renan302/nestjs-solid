import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerMockRepository } from './repositories/customer.mock.repository';
import { CreateApplication } from './applications/create/create.application';
import { FindAllApplication } from './applications/find-all/find-all.application';

const customerMockRepository = {
  provide: 'CustomerMockRepository',
  useClass: CustomerMockRepository
};

@Module({
  controllers: [CustomerController],
  providers: [customerMockRepository, CreateApplication, FindAllApplication]
})
export class CustomerModule {}