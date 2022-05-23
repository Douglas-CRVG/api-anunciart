import { Router } from "express";
import { create, getLink } from "../controllers/vimeoController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticateMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { verifyStatusMiddleware } from "../middlewares/verifyStatusMiddleware.js";
import createSchema from "../schemas/createSchema.js";

const vimeoRouter = Router();

vimeoRouter.post("/create", ensureAuthenticatedMiddleware, validateSchemaMiddleware(createSchema), create);
vimeoRouter.get("/list", verifyStatusMiddleware, getLink);


export default vimeoRouter;