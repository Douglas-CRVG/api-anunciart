import { Router } from "express";
import multer from "multer";
import { createTest, create, find, getLink } from "../controllers/videoController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticateMiddleware.js";
import { validateIdMiddleware } from "../middlewares/validateIdMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { verifyStatusMiddleware } from "../middlewares/verifyStatusMiddleware.js";
import createSchema from "../schemas/createSchema.js";

const videoRouter = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const newFileName = file.fieldname + '-' + Date.now()

        const fileExtension = file.originalname.split('.')[1];

        const fullName = newFileName + '.' + fileExtension;

        req.body.video = "uploads/" + fullName
        cb(null, fullName)
    },
});
const upload = multer({ storage })

videoRouter.post("/videos", ensureAuthenticatedMiddleware, validateSchemaMiddleware(createSchema), upload.single('video'), create);
videoRouter.post("/videos-test", upload.single('video'), createTest);
videoRouter.get("/videos", find);
videoRouter.get("/videos/:id", ensureAuthenticatedMiddleware, validateIdMiddleware, verifyStatusMiddleware, getLink);


export default videoRouter;