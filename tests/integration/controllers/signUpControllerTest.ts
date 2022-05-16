import supertest from "supertest";
import server from "../../../src/app.js";
import { formatBodyCreateUser } from "../../factories/formatBodyCreateUserFactory.js";

export async function duplicateEmail() {
  const body = formatBodyCreateUser();

  await supertest(server).post("/sign-up").send(body);
  const result = await supertest(server).post("/sign-up").send(body);

  expect(result.status).toEqual(409);
}

export async function invalidBodyEmail() {
  const { password } = formatBodyCreateUser();

  const result = await supertest(server)
    .post("/sign-up")
    .send({ email: "", password });

  expect(result.status).toEqual(422);
}

export async function invalidBodyPassword() {
  const { email } = formatBodyCreateUser();

  const result = await supertest(server)
    .post("/sign-up")
    .send({ email, password: "" });

  expect(result.status).toEqual(422);
}
