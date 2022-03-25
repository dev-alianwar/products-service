import { gql } from 'apollo-server';

const typeDefs = gql`
input productFilters{
  id: String,
  title: String,
  price: Float
}

extend type Query {
  topProducts(args:productFilters): [Product]
}

type Category @key(fields: "id"){
  id: String!
  name: String!
}

type Product @key(fields: "id"){
    id: String,
    title: String,
    price: Float,
    productCode: String,
    expiryDate: String,
}`;



export  default typeDefs;