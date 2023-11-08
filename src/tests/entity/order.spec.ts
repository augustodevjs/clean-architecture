import { Order, OrderItem } from "../../domain";

describe("Order unit tests", () => {

  it("should throw error when id is empty", () => {
    expect(() => {
      new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      new Order("1", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("order must have at least one item", () => {
    expect(() => {
      new Order("1", "123", []);
    }).toThrowError("Order must have at least one item");
  });

  it("should calculate total", () => {
    const items = [
      new OrderItem("1", "product-21", 100, "p1", 2),
      new OrderItem("2", "product-62", 200, "p2", 3)
    ];

    const order = new Order("1", "123", items);

    expect(order.total()).toBe(800);
  });

  it("should throw error if the item quantity is greater than zero", () => {
    expect(() => {
      const item = new OrderItem("1", "product-21", 100, "p1", 0);

      new Order("1", "123", [item]);
    }).toThrowError("Quantity must be greater than zero");
  });
});
