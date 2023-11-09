import { ICustomer } from "../../../domain";
import {
	FindCustomerInputModel,
	FindCustomerViewModel,
} from "../../dto";

export class FindCustomerUseCase {
	private customerRepository: ICustomer;

	constructor(customerRepository: ICustomer) {
		this.customerRepository = customerRepository;
	}

	async execute(input: FindCustomerInputModel): Promise<FindCustomerViewModel> {
		const customer = await this.customerRepository.find(input.id);

		return {
			id: customer.id,
			name: customer.name,
			address: {
				city: customer.address.city,
				number: customer.address.number,
				street: customer.address.street,
				zip: customer.address.zip,
			},
		};
	}
}
