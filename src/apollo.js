import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://cherrycoke.herokuapp.com'
});

export default client;
