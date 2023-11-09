import express, { Request, Response } from 'express'

import { CustomerRepository } from '../../infra';
import { CreateCustomerUseCase, ListCustomerUseCase, ListCustomerViewModel } from '../../application';
import { CustomerPresenter } from '../presenters';

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
    response.status(400).send(error);
  }
})

CustomerRoute.get("/", async (_, response: Response) => {
  const usecase = new ListCustomerUseCase(repository);

  try {
    const output: ListCustomerViewModel = await usecase.execute();

    response.format({
      json: async () => response.status(200).send(output),
      xml: async () => response.send(CustomerPresenter.listXML(output)),
    });
  } catch (error) {
    response.status(400).send(error);
  }
});
