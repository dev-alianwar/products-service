import { startApolloServer } from "./appoloServer";
import { expressServer  }from './expressServer';

const startupErrorExitCode = 201;

function startServer()
{
  try {
    startApolloServer(expressServer, "/api/graphql");
  } catch (error) {
    console.log(`Exit: process terminated with code: ${startupErrorExitCode}`); }
}


startServer();