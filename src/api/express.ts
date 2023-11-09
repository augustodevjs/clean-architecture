import express from "express";
import { Sequelize } from "sequelize-typescript";

import { CustomerModel } from "../infra";
import { CustomerRoute } from "./routes";

export const app = express();

app.use(express.json());
app.use("/customer", CustomerRoute)
export let sequelize: Sequelize;

const setupDb = async () => {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });

  sequelize.addModels([CustomerModel]);
  await sequelize.sync();
}

setupDb();