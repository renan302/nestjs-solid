import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../infra/customer.repository';

@Injectable()
export class CustomerService {

    constructor(private repository : CustomerRepository){}

}
