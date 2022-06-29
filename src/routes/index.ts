import { Router } from "express";
import authRouter from "./authRouter.js";
import videoRouter from "./videoRouter.js";

const router = Router();

router.use(authRouter);
router.use(videoRouter);

export default router;
