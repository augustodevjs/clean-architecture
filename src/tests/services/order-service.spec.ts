import { Customer, Order, OrderItem } from "../../domain"
import { OrderService } from "../../application";

describe("Order Service Unit Test", () => {
  it("Should get total of orders", () => {
    const item1 = new OrderItem("1", "order1", 100, "1", 1,);
    const item2 = new OrderItem("2", "order2", 200, "2", 2,);

    const order1 = new Order("1", "1", [item1]);
    const order2 = new Order("1", "1", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(500);
  });

  it("Should place an order", () => {
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.rewardsPoints).toBe(5);
    expect(order.total()).toBe(10);
  });


  it("Should throw exception when order doesn't have more thant 2 items", () => {
    const customer = new Customer("c1", "Customer 1");

    const orderFunction = () => {
      OrderService.placeOrder(customer, []);
    };

    expect(orderFunction).toThrowError('Order must have at least one item');
  });


  it("Should add reward points ", () => {
    const customer = new Customer("c1", "Customer 1");
    expect(customer.rewardsPoints).toBe(0);

    customer.addRewardPoints(10)
    expect(customer.rewardsPoints).toBe(10);

    customer.addRewardPoints(10)
    expect(customer.rewardsPoints).toBe(20);
  });
})