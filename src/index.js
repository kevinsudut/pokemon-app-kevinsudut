import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: {
            keyArgs: false,
            merge(existing, incoming) {
              let results = [];
              if (existing && existing.results) {
                results = results.concat(existing.results);
              }
              if (incoming && incoming.results) {
                results = results.concat(incoming.results);
              }
              return {
                ...incoming,
                results,
              };
            },
          },
        },
      },
    },
  })),
  link: createHttpLink({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
