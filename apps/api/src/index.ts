import express, { Application } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import typeDefs from "@/typedefs";
import Resolver from "@/resolver";
import cors from "cors";

const bootStrap = async (app: Application) => {
  /**
   * System Middleware
   */
  app.use(express.json());
  app.use(cors());

  /**
   * Apollo Server Initialization
   */
  const server = new ApolloServer({
    typeDefs,
    resolvers: Resolver(),
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));
  app.listen(9000, () => {
    console.log("Server running on port 9000");
  });
};

bootStrap(express());
