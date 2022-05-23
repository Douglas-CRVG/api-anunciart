import { Router } from "express";
import authRouter from "./authRouter.js";
import vimeoRouter from "./vimeoRouter.js";

const router = Router();

router.use(authRouter);
router.use(vimeoRouter);

export default router;
