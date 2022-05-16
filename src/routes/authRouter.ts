import { Router } from "express";
import * as auth from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", auth.signUp);

export default authRouter;
