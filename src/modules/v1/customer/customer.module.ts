import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerMockRepository } from './repositories/customer.mock.repository';
import { CreateApplicationService } from './applications/create/create.application.service';
import { FindAllApplicationService } from './applications/find-all/find-all.application.service';

const customerMockRepository = {
  provide: 'CustomerMockRepository',
  useClass: CustomerMockRepository
};

@Module({
  controllers: [CustomerController],
  providers: [customerMockRepository, CreateApplicationService, FindAllApplicationService]
})
export class CustomerModule {}