import express, { Request, Response } from 'express'

import { CustomerRepository } from '../../infra';
import { CreateCustomerUseCase } from '../../application';

export const CustomerRoute = express.Router();

CustomerRoute.post('/', async (request: Request, response: Response) => {
  const usecase = new CreateCustomerUseCase(new CustomerRepository());

  try {
    const customerInputModel = {
      name: request.body.name,
      address: {
        city: request.body.address.city,
        number: request.body.address.number,
        street: request.body.address.street,
        zip: request.body.address.zip
      }
    };

    const customerViewModel = await usecase.execute(customerInputModel);

    response.status(201).send(customerViewModel);
  } catch (error) {
    response.status(500).send(error);
  }
})