import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import express from "express";
import "dotenv-safe/config";
import { ApolloServer } from "apollo-server-express";
import { UserResolver } from "./resolvers/UserResolver";
import { buildSchema } from "type-graphql";

const prisma = new PrismaClient();

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, prisma }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
  });

  app.get("/", (req, res) => {
    res.send("tody backend server");
  });

  app.listen(parseInt(process.env.PORT), () => {
    console.log("server started");
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
