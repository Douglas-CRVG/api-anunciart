import { Request, Response } from "express";
import client from "../clientVimeo.js";
import { notFoundError } from "../utils/errorUtils.js";
import * as videoService from "../services/videoService.js"
import { CreateVideo } from "../repositories/videoRepository.js";
import { Video } from "@prisma/client";

export async function create(req: Request, res: Response) {
    const { name, description, fileName } = req.body;
    await videoService.findByName(name)
    let result: Video;
    let data: CreateVideo = {
        name, description, link: ""
    };
    client.upload(
        fileName,
        {
            'name': name,
            'description': description
        },
        async (uri) => {
            console.log('Your video URI is: ' + uri);
            data.link = uri.split("/")[2]
            result = await videoService.create(data);
            res.status(201).send(result)
        },
        (bytes_uploaded, bytes_total) => {
            const percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
            console.log(bytes_uploaded, bytes_total, percentage + '%')
        },
        (error) => {
            console.log('Failed because: ' + error)
            throw notFoundError('Failed because: ' + error)
        }
    )
}

export async function getLink(req: Request, res: Response) {
    const { id } = req.params;
    const result = await videoService.findByIdVideo(id)

    res.send(result)
}

export async function find(req: Request, res: Response) {
    const result = await videoService.find();

    res.status(200).send(result);
}