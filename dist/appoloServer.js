"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApolloServer = void 0;
const http_1 = __importDefault(require("http"));
const graphql_1 = __importDefault(require("./graphql"));
const config_1 = __importDefault(require("./config"));
const startApolloServer = async (app, path) => {
    app.listen(config_1.default.port);
    const httpServer = http_1.default.createServer(app);
    const apolloServer = (0, graphql_1.default)(httpServer);
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path });
    console.log(`GraphQL is running on ${config_1.default.host}:${config_1.default.port}${path}`);
    return apolloServer;
};
exports.startApolloServer = startApolloServer;
//# sourceMappingURL=appoloServer.js.map