export interface UpdateCustomerViewModel {
  id: string;
  name: string;
  address?: {
    street: string;
    number: number;
    zip: string;
    city: string;
  };
}
