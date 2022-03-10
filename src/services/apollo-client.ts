import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: process.env.GRAPHQL_API_URL || 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
