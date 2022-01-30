import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";

export type Context = {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  req: express.Request;
  res: express.Response;
};
