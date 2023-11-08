import { v4 as uuid } from 'uuid'
import {Address, Customer} from "../../entity";

interface CreateCustomerWithAddressInterface {
    name: string;
    address: {
        street: string;
        number: number;
        zip: string;
        city: string;
    }
}

export class CustomerFactory {
    public static create(name: string): Customer {
        return new Customer(uuid(), name);
    }

    public static createWithAddress(data: CreateCustomerWithAddressInterface): Customer {

        const addressOfCustomer = new Address(data.address.street, data.address.number,data.address.city, data.address.zip);
        const customer = new Customer(uuid(), data.name);
        customer.changeAddress(addressOfCustomer);

        return customer;
    }
}