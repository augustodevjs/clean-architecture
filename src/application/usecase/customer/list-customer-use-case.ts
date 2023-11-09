import { ICustomer } from "../../../domain";
import { ListCustomerViewModel } from "../../dto";

export class ListCustomerUseCase {
  private customerRepository: ICustomer;

  constructor(customerRepository: ICustomer) {
    this.customerRepository = customerRepository;
  }

  async execute(): Promise<ListCustomerViewModel> {
    const customersList = await this.customerRepository.findAll();

    const customers = customersList.map(customer => {
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
    });

    return {
      customers
    };
  }
}