export interface CreateCustomerViewModel {
  id: string;
  name: string;
  address?: {
    street: string;
    number: number;
    zip: string;
    city: string;
  }
}
