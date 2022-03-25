"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
type input productInput{
  id: String,
  title: String,
  price: Float
}

type Query {
  topProducts(input:productInput ): [Product]
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
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map