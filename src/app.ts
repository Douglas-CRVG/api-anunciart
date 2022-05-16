import express from "express";
import cors from "cors";
import "express-async-errors";
import router from "./routes/index.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);

export default server;
