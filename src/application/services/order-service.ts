import { Customer, Order, OrderItem } from "../../domain";
import { v4 as uuid } from 'uuid'

export class OrderService {
  static total(items: Order[]): number {
    return items.reduce((acc, order) => acc + order.total(), 0)
  }

  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (items.length === 0) {
      throw new Error("Order must have at least one item");
    }

    const order = new Order(uuid(), customer.id, items);
    customer.addRewardPoints(order.total() / 2);

    return order;
  }
} 