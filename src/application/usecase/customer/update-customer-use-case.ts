import { validate } from "uuid";
import { Address, ICustomer } from "../../../domain";
import { UpdateCustomerInputModel, UpdateCustomerViewModel } from "../../dto";

export class UpdateCustomerUseCase {
  private customerRepository: ICustomer;

  constructor(customerRepository: ICustomer) {
    this.customerRepository = customerRepository;
  }

  async execute(input: UpdateCustomerInputModel): Promise<UpdateCustomerViewModel> {
    const { id, name, address } = input;

    const IdIsInvalid = !validate(id);

    if (IdIsInvalid) {
      throw new Error("Invalid customer id");
    }

    const customer = await this.customerRepository.find(id);

    if (!customer) {
      throw new Error("Customer not found");
    }

    if (address) {
      const { street, number, zip, city } = address;
      const newAddress = new Address(street, number, zip, city);
      customer.changeAddress(newAddress);
    }

    if (name) {
      customer.changeName(name);
    }

    await this.customerRepository.update(customer);

    return {
      id: customer.id,
      name: customer.name,
      address: {
        city: customer.address.city,
        number: customer.address.number,
        street: customer.address.street,
        zip: customer.address.zip
      }
    };
  }
}
