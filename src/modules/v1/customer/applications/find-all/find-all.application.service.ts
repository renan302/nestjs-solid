import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../../domains/customer.model';
import { Factory } from '../../factory';
import { ICustomerRepository } from '../../interfaces/customer.repository.interface';

@Injectable()
export class FindAllApplicationService {

    constructor(@Inject(Factory.provideRepository) 
    private customerRepository : ICustomerRepository)
    {}

    async execute () : Promise<Array<Customer>> {
        return await this.customerRepository.loadAll();
    }
}
