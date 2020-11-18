import { Customer } from './customer.model';

describe('Customer', () => {
  it('should be defined', () => {
    expect(new Customer()).toBeDefined();
  });
});
