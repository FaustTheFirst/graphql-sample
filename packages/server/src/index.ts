import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const startServer = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
  app.listen(3001, () => {
    console.log(
      `🚀 Server ready at http://localhost:3001${server.graphqlPath}`,
    );
  });
};

startServer();
