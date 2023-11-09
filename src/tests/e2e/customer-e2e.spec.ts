import request from "supertest";
import { app, sequelize } from "../../api";

describe("E2E test for customer", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  const address = {
    street: "123 Main St",
    city: "Anytown",
    number: 123,
    zip: "12345",
  };

  it("should create a customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({ name: "John Doe", address });

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toEqual("John Doe");
    expect(response.body.address).toEqual(address);
  });
});
