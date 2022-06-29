import { Video } from "@prisma/client";
import videoRepository, { CreateVideo, } from "../repositories/videoRepository.js";
import * as apiVimeo from "../utils/apiVimeo.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";

export async function create(data: CreateVideo) {
    await findByLink(data.link)

    const result = await videoRepository.create(data)

    return result;
}

export async function findByName(name: string) {
    const resultName = await videoRepository.findByName(name);
    if (resultName)
        throw conflictError("there is already a presentation for this name");
}

async function findByLink(link: string) {
    const resultLink = await videoRepository.findByLink(link);
    if (resultLink)
        throw conflictError("there is already a presentation with this link");
}

export async function find() {
    await updateThumbnail();

    const result = {
        findNew: await videoRepository.findNew(),
        findAll: await videoRepository.findAll()
    };

    return result;
}

export async function findByIdVideo(id: string) {
    const result = await videoRepository.findByLink(id);
    if (!result) throw notFoundError("Not found")

    return result;
}

async function updateThumbnail() {
    const findAll = await videoRepository.findAll();
    findAll.map(async (video) => {
        if (video.thumbnail) {
            return video;
        } {
            const thumbnail = await getThumbnail(video.link);
            await videoRepository.update({ ...video, thumbnail });
        }
    });
}

async function getThumbnail(videoId: string) {
    const { data } = await apiVimeo.getThumbnail(videoId)
    if (data.data[0].base_link) {
        console.log(data.data[0].base_link)
        return data.data[0].base_link
    } else {
        return ""
    }

}