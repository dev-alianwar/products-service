import { gql } from 'apollo-server';

const typeDefs = gql`
input productFilters{
  id: String,
  title: String,
  price: Float
}

type Query {
  topProducts(args:productFilters): [Product]
}

type Category{
  id: String!
  name: String!
}

type Product{
    id: String,
    title: String,
    price: Float,
    productCode: String,
    expiryDate: String,
}`;



export  default typeDefs;