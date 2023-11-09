import {CustomerFactory, ICustomer} from "../../../domain";
import {CreateCustomerInputModel, CreateCustomerViewModel} from "../../dto";

export class CreateCustomerUseCase {
  private customerRepository: ICustomer;

  constructor(customerRepository: ICustomer) {
    this.customerRepository = customerRepository;
  }

  async execute(input: CreateCustomerInputModel): Promise<CreateCustomerViewModel> {
    const { name, address } = input;

    const customer = address ?
      CustomerFactory.createWithAddress({ name, address }) : CustomerFactory.create(name);

    await this.customerRepository.create(customer);

    return {
      id: customer.id,
      name: customer.name,
      address: {
        city: customer.address.city,
        number: customer.address.number,
        street: customer.address.street,
        zip: customer.address.zip
      },
    };
  }

}
