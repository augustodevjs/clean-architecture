import { ValidatorInterface, Customer, CustomerYupValidator } from "../..";

export class CustomerValidatorFactory {
  static create(): ValidatorInterface<Customer> {
    return new CustomerYupValidator();
  }
}
