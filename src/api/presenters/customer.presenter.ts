import { toXML, XmlOptions } from "jstoxml";
import { ListCustomerViewModel } from "../../application";

export class CustomerPresenter {
  static listXML({ customers }: ListCustomerViewModel): string {
    const xmlOptions: XmlOptions = {
      header: true,
      indent: " ",
    };

    return toXML({
      customers: {
        customer: customers.map(({ id, name, address }) => ({
          id,
          name,
          address,
        }))
      }
    }, xmlOptions);
  }
}
