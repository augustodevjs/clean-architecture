export interface CreateCustomerInputModel {
  name: string;
  address?: {
    street: string;
    number: number;
    zip: string;
    city: string;
  }
}