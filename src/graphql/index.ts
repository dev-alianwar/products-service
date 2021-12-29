
import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';


const graphQL = new ApolloServer({ typeDefs, resolvers });


export default graphQL;