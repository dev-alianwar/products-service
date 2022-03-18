"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
extend type Query {
  topProducts(first: Int = 5): [Product]
}

type Category @key(fields: "id") {
  id: String!
  name: String!
}

type Product @key(fields: "upc") {
  upc: String!
  name: String!
  price: Int
}`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map