import { Request, Response } from "express";
import { prisma } from "../db.js";
import userService from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
    const user = req.body;

    await userService.signUp(user);

    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const user = req.body;

    const token = await userService.signIn(user);

    res.send({ token });
}

export async function findAll(req: Request, res: Response) {
    const result = await prisma.user.findMany()

    res.send(result);
}