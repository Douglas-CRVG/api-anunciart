import { NextFunction, Request, Response } from "express";
import * as videoService from "../services/videoService.js";

export async function validateIdMiddleware(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    await videoService.findByIdVideo(id)

    next();
}