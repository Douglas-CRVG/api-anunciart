import { Video } from "@prisma/client";
import { prisma } from "../db.js";

export type CreateVideo = Omit<Omit<Omit<Video, "id">, "createdAt">, "thumbnail">

async function create(data: CreateVideo) {
    return await prisma.video.create({
        data
    })
}

async function update(data: Video) {
    return await prisma.video.update({
        where: { link: data.link },
        data: { thumbnail: data.thumbnail }
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

async function findAll() {
    return await prisma.video.findMany()
}

async function findNew() {
    return await prisma.video.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        take: 3
    })
}

const videoRepository = {
    create, findByName, findByLink, findAll, findNew, update
}

export default videoRepository;