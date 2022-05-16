import { faker } from "@faker-js/faker";
import { CreateUserData } from "../../src/services/userService.js";

export function formatBodyCreateUser(): CreateUserData {
    return {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}
