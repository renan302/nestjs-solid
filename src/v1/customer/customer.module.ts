import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerMockRepository } from './repositories/customer.mock.repository';
import { CreateService } from './applications/create/create.service';
import { FindAllService } from './applications/find-all/find-all.service';

const customerMockRepository = {
  provide: 'CustomerMockRepository',
  useClass: CustomerMockRepository
};

@Module({
  controllers: [CustomerController],
  providers: [customerMockRepository, CreateService, FindAllService]
})
export class CustomerModule {}