import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import http from "http";
import graphQL from "./graphql";
import config from './config';

export interface ApolloContext {
  accountId: string;
  token: string;
}

export const startApolloServer = async (app: Express): Promise<ApolloServer> => {
  const httpServer = http.createServer(app);
  await new Promise<void>(resolve => httpServer.listen({ port: config.port }, resolve));
  console.log(`🚀  Server ready at ${config.host}:${config.port}`);
  return graphQL;
};