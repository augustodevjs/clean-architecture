import { FindCustomerInputModel, FindCustomerUseCase, FindCustomerViewModel } from "../../../application";
import { CustomerFactory } from "../../../domain";

const customer = CustomerFactory.createWithAddress({
    name: "John Doe",
    address: {
        street: "Street 1",
        number: 1,
        zip: "Zipcode 1",
        city: "City 1",
    }
});

const MockRepository = () => {
    return {
        create: jest.fn(),
        update: jest.fn(),
        find: jest.fn().mockResolvedValue(Promise.resolve(customer)),
        findAll: jest.fn(),
    };
};

describe("Unit Test find customer use case", () => {
    it("Should find a customer", async () => {
        const customerRepository = MockRepository();
        const useCase = new FindCustomerUseCase(customerRepository);

        const input: FindCustomerInputModel = {
            id: customer.id,
        };

        const expectedOutput: FindCustomerViewModel = {
            id: customer.id,
            name: customer.name,
            address: {
                street: customer.address.street,
                number: customer.address.number,
                zip: customer.address.zip,
                city: customer.address.city
            }
        };

        const result = await useCase.execute(input);
        expect(result).toEqual(expectedOutput);
    })
})