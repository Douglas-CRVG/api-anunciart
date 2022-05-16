import joi from "joi";
import { CreateUserData, SignIn } from "../services/userService.js";

const signUpSchema = joi.object<CreateUserData>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const signInSchema = joi.object<SignIn>({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

export {
    signInSchema,
    signUpSchema,
}