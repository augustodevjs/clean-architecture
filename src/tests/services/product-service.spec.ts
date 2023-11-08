import { Product } from "../../domain/entity"
import { ProductService } from "../../application/services";

describe("Product Service Unit Test", () => {
  it("Should change the prices of all products", () => {
    const product1 = new Product("1", "Product 1", 10);
    const product2 = new Product("2", "Product 2", 20);

    ProductService.increasePrice([product1, product2], 100);

    expect(product1.price).toBe(20);
    expect(product2.price).toBe(40);
  })
})