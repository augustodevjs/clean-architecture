import { Sequelize } from "sequelize-typescript";
import { Address, Customer } from "../../../domain";
import { CustomerModel, CustomerRepository } from "../../../infra";
import { FindCustomerInputModel, FindCustomerUseCase, FindCustomerViewModel } from "../../../application";

describe("Test find customer use case", () => {
    let sequelize: Sequelize

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        })

        sequelize.addModels([CustomerModel])
        await sequelize.sync()
    })

    afterEach(async () => {
        await sequelize.close()
    })

    it("Should find a customer", async () => {
        const customerRepository = new CustomerRepository();
        const usecase = new FindCustomerUseCase(customerRepository)

        const customer = new Customer("123", "John");
        const address = new Address("Street", 123, "city", "zip");
        customer.changeAddress(address);

        await customerRepository.create(customer);

        const input: FindCustomerInputModel = {
            id: "123"
        }

        const output: FindCustomerViewModel = {
            id: "123",
            name: "John",
            address: {
                street: "Street",
                number: 123,
                city: "city",
                zip: "zip"
            }
        }

        const result = await usecase.execute(input);
        expect(result).toEqual(output);
    })
})