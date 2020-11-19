import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../../domains/customer.model';
import { ICustomerRepository } from '../../interfaces/customer.repository.interface';

@Injectable()
export class FindAllApplicationService {

    constructor(@Inject('CustomerMockRepository') 
    private customerMockRepository : ICustomerRepository)
    {}

    async execute () : Promise<Array<Customer>> {
        return await this.customerMockRepository.loadAll();
    }
}
