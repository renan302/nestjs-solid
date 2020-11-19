import { Customer } from "../domains/customer.model";

export interface ICustomerRepository {
    store(customer:Customer): Promise<void>;
    loadAll():Promise<Array<Customer>>;
}