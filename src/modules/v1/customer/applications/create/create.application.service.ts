import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../../domains/customer.model';
import { Factory } from '../../factory';
import { ICustomerRepository } from '../../interfaces/customer.repository.interface';
import { CustomerCreateDTO } from './customer-create.dto';

@Injectable()
export class CreateApplicationService {

    constructor(
    @Inject(Factory.provideRepository) 
    private customerRepository : ICustomerRepository
    ){}

    async execute(customer : CustomerCreateDTO) : Promise<void> {
        this.customerRepository.store(new Customer(customer.name, customer.mail, customer.phone));
    }

}
