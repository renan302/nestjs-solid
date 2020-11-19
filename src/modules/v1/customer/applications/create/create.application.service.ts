import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../../domains/customer.model';
import { ICustomerRepository } from '../../interfaces/customer.repository.interface';
import { CustomerCreateDTO } from './customer-create.dto';

@Injectable()
export class CreateApplicationService {

    constructor(
    @Inject('CustomerMockRepository') 
    private customerMockRepository : ICustomerRepository
    ){}

    async execute(customer : CustomerCreateDTO) : Promise<void> {
        this.customerMockRepository.store(new Customer(customer.name, customer.mail, customer.phone));
    }

}
