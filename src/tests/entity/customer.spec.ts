import { Address, Customer } from "../../domain";

describe("Customer unit tests", () => {
  it("Should throw error when Id is empty", () => {
    const customer = () => new Customer("", "Augusto");
    expect(customer).toThrowError("Id is required");
  });

  it("Should throw error when name is empty", () => {
    const customer = () => new Customer("123", "");
    expect(customer).toThrowError("Name is required");
  });

  it("Should change name", () => {
    // Arrange
    const customer = new Customer("123", "John");

    // Act
    customer.changeName("Jane");

    // Assert
    expect(customer.name).toBe("Jane");
  });

  it("Should activate customer", () => {
    // Arrange
    const customer = new Customer("123", "John");
    const address = new Address("Street 1", 122, "Fortal", "60765065");
    customer.changeAddress(address);

    // Act
    customer.activate();

    // Assert
    expect(customer.isActive()).toBe(true);
  });

  it("Should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("123", "John");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");

  });

  it("Should desactivate customer", () => {
    // Arrange
    const customer = new Customer("123", "John");

    // Act
    customer.desactivate();

    // Assert
    expect(customer.isActive()).toBe(false);
  });
})