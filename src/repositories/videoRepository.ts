import { Video } from "@prisma/client";
import { prisma } from "../db.js";

export type CreateVideo = Omit<Omit<Video, "id">, "createdAt">

async function create(data: CreateVideo) {
    return await prisma.video.create({
        data
    })
}

async function findByLink(link: string) {
    return await prisma.video.findUnique({
        where: { link }
    })
}

async function findByName(name: string) {
    return await prisma.video.findUnique({
        where: { name }
    })
}

const videoRepository = {
    create, findByName, findByLink
}

export default videoRepository;