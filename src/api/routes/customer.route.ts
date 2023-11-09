import express, { Request, Response } from 'express'

import { CustomerRepository } from '../../infra';
import { CreateCustomerUseCase, ListCustomerUseCase } from '../../application';

export const CustomerRoute = express.Router();

const repository = new CustomerRepository()

CustomerRoute.post('/', async (request: Request, response: Response) => {
  const usecase = new CreateCustomerUseCase(repository);

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

CustomerRoute.get('/', async (request: Request, response: Response) => {
  const usecase = new ListCustomerUseCase(repository);

  try {
    const listCustomerViewModel = await usecase.execute();

    response.status(200).send(listCustomerViewModel);
  } catch (error) {
    response.status(500).send(error);
  }
})