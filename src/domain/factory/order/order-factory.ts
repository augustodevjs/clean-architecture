import {Order, OrderItem} from '../../entity'

interface CreateOrderInterface {
    id: string,
    customerId: string,
    items: {
        id: string;
        productId: string;
        name: string;
        unitPrice: number;
        quantity: number;
    }[]
}

export class OrderFactory {
    public static create({ customerId, items, id}: CreateOrderInterface): Order {

        const itemsParsed = items.map(item => {
            return new OrderItem(item.id,item.name, item.unitPrice, item.productId, item.quantity);
        });

        return new Order(id, customerId, itemsParsed);
    }
}