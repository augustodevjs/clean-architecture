import {CustomerFactory} from "../../domain";

describe("Customer Factory unit tests", () => {
    const address = {
        street: "Wilkie Way",
        number: 4290,
        zip: "94306",
        city: "Palo Alto, CA"
    };

    it("should create a customer with an address", () => {
        const customer = CustomerFactory.createWithAddress({
            name: "John Doe",
            address
        });

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John Doe");

        expect(customer.address.zip).toBe(address.zip);
        expect(customer.address.city).toBe(address.city);
        expect(customer.address.street).toBe(address.street);
        expect(customer.address.number).toBe(address.number);
    });

    it("should create a customer without address", () => {
        const customer = CustomerFactory.create("John Doe");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John Doe");
        expect(customer.address).toBeFalsy();
    });

});