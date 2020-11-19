import { Injectable } from "@nestjs/common";
import { Customer } from "../domains/customer.model";
import { ICustomerRepository } from "../interfaces/customer.repository.interface";

@Injectable()
export class CustomerMockRepository implements ICustomerRepository{
    

    private customers : Array<Customer> = new Array<Customer>();
    
    async store(customer) : Promise<void>{
        this.customers.push(customer);
    }

    async loadAll(): Promise<Customer[]> {
        return this.customers;
    }
    
}