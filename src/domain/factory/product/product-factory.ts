import {IProductEntity, Product} from "../../index";
import {ProductB} from "../../entity/product/productB";
import { v4 as uuid } from 'uuid'

interface CreateProductInterface {
    type: string;
    name: string;
    price: number;
}

export class ProductFactory {
    public static create({ type, name, price } : CreateProductInterface): IProductEntity {
        switch (type) {
            case "A":
                return new Product(uuid(), name, price);

            case "B":
                return new ProductB(uuid(), name, price);

            default:
                throw new Error("Product type unsupported");
        }
    }
}