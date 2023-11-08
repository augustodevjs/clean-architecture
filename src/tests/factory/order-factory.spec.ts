import {OrderFactory} from "../../domain";
import { v4 as uuid } from 'uuid'

describe("Order Factory unit test", () => {
    it("should create an order", () => {
        const orderProps = {
            id: uuid(),
            customerId: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: "Item 1",
                    unitPrice: 100,
                    quantity: 3
                }
            ]
        };

        const order = OrderFactory.create(orderProps);

        expect(order.id).toBe(orderProps.id);
        expect(order.customerId).toBe(orderProps.customerId);
        expect(order.items.length).toBe(1);
    });

});