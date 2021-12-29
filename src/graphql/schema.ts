import { gql } from 'apollo-server';

const typeDefs = gql`
extend type Query {
  topProducts(first: Int = 5): [Product]
}

type Product @key(fields: "upc") {
  upc: String!
  name: String!
  price: Int
}`;



export  default typeDefs;