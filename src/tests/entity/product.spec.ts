import { Product } from "../../domain";

describe("Product unit tests", () => {
  it("Should throw error when Id is empty", () => {
    expect(() => {
      new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });

  it("Should throw error when Name is empty", () => {
    expect(() => {
      new Product("123", "", 100);
    }).toThrowError("Name is required");
  });

  it("Should throw error when price is less than zero", () => {
    expect(() => {
      new Product("123", "Product 1", -1);
    }).toThrowError("Price must be greater than zero");
  });

  it("Should change name", () => {
    const product = new Product("123", "Product 1", 100);
    product.changeName("Product");

    expect(product.name).toBe("Product");
  });

  it("Should change price", () => {
    const product = new Product("123", "Product 1", 100);
    product.changePrice(200);

    expect(product.price).toBe(200);
  });
})