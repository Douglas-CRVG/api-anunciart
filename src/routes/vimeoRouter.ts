import { Router } from "express";
import { create, find, getLink } from "../controllers/vimeoController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticateMiddleware.js";
import { validateIdMiddleware } from "../middlewares/validateIdMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { verifyStatusMiddleware } from "../middlewares/verifyStatusMiddleware.js";
import createSchema from "../schemas/createSchema.js";

const vimeoRouter = Router();

vimeoRouter.post("/videos", ensureAuthenticatedMiddleware, validateSchemaMiddleware(createSchema), create);
vimeoRouter.get("/videos", find);
vimeoRouter.get("/videos/:id", ensureAuthenticatedMiddleware, validateIdMiddleware, verifyStatusMiddleware, getLink);


export default vimeoRouter;