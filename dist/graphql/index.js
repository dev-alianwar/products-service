"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const apollo_server_core_1 = require("apollo-server-core");
const graphQL = (httpServer) => {
    return new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        introspection: true,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })] });
};
exports.default = graphQL;
//# sourceMappingURL=index.js.map