
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { Server } from 'http';


const graphQL = (httpServer: Server) => {
    return new ApolloServer({ typeDefs,
                              resolvers, 
                              introspection: true, 
                              plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]});
}
export default graphQL;