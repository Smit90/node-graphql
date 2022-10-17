const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
require("dotenv").config();

const port = process.env.PORT || 5000;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }, () =>
  console.log(`Graphql Server runs at: http://localhost:${port}`)
);
