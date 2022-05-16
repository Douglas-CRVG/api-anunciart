import { prisma } from "../db.js";
import { CreateUserData } from "../services/userService.js";

async function findById(id: number) {
    return await prisma.user.findUnique({
        where: {
            id,
        },
    });
}
async function findByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
}

async function insert(createUserData: CreateUserData) {
    return await prisma.user.create({
        data: createUserData,
    });
}

export default {
    findByEmail,
    findById,
    insert,
};