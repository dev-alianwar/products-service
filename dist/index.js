"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appoloServer_1 = require("./appoloServer");
const expressServer_1 = require("./expressServer");
const startupErrorExitCode = 201;
function startServer() {
    try {
        (0, appoloServer_1.startApolloServer)(expressServer_1.expressServer);
    }
    catch (error) {
        console.log(`Exit: process terminated with code: ${startupErrorExitCode}`);
    }
}
//# sourceMappingURL=index.js.map