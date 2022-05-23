import { NextFunction, Request, Response } from "express";
import client from "../clientVimeo.js";
import { notFoundError } from "../utils/errorUtils.js";

export function verifyStatusMiddleware(req: Request, res: Response, next: NextFunction) {
    const { uri } = req.body;
    client.request(uri + '?fields=transcode.status', function (error, body, status_code, headers) {
        if (body.transcode.status === 'complete') {
            next()
        } else if (body.transcode.status === 'in_progress') {
            throw notFoundError('Your video is still transcoding.');
        } else {
            throw notFoundError('Your video encountered an error during transcoding.');
        }
    })
}