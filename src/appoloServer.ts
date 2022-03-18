import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import http from "http";
import graphQL from "./graphql";
import config from './config';


export const startApolloServer = async (app: Express, path:string): Promise<ApolloServer> => {
  app.listen(config.port)
  const httpServer = http.createServer(app);
  const apolloServer =  graphQL(httpServer);
  await apolloServer.start();
  apolloServer.applyMiddleware({app, path});
  console.log(`GraphQL is running on ${config.host}:${config.port}${path}`)
  return apolloServer;
};