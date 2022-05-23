import { Video } from "@prisma/client";
import videoRepository, { CreateVideo, } from "../repositories/videoRepository.js";
import { conflictError } from "../utils/errorUtils.js";

export async function create(data: CreateVideo) {
    await findByLink(data.link)

    const result = await videoRepository.create(data)

    return result;
}

export async function findByName(name: string) {
    const resultName = await videoRepository.findByName(name);
    if (resultName)
        throw conflictError("there is already a presentation for this link");
}

async function findByLink(link: string) {
    const resultLink = await videoRepository.findByLink(link);
    if (resultLink)
        throw conflictError("there is already a presentation with this name");
}

export async function find() {
    const result = {
        findNew: await videoRepository.findNew(),
        findAll: await videoRepository.findAll()
    };

    return result;
}
