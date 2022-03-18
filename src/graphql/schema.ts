import { gql } from 'apollo-server';

const typeDefs = gql`
type Query {
  topProducts: [Product]
}

type Category{
  id: String!
  name: String!
}

type Product{
  upc: String!
  name: String!
  price: Int
}`;



export  default typeDefs;