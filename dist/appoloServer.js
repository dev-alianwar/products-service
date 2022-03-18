"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApolloServer = void 0;
const http_1 = __importDefault(require("http"));
const graphql_1 = __importDefault(require("./graphql"));
const config_1 = __importDefault(require("./config"));
const startApolloServer = async (app) => {
    const httpServer = http_1.default.createServer(app);
    await graphql_1.default.start();
    await new Promise(resolve => httpServer.listen({ port: config_1.default.port }, resolve));
    console.log(`🚀  Server ready at http://${config_1.default.host === "0.0.0.0" ? "localhost" : config_1.default.host}:${config_1.default.port}`);
    return graphql_1.default;
};
exports.startApolloServer = startApolloServer;
//# sourceMappingURL=appoloServer.js.map