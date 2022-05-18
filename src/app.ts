import express from "express";
import cors from "cors";
import "express-async-errors";
import router from "./routes/index.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);
server.use(errorHandlerMiddleware)

export default server;
//gjkhgkjfjhgd
//slfhdjlfhshfjshfjkhsdkjfhs