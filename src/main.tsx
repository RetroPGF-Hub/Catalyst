import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'https://opensource-observer.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
       <App />
    </ApolloProvider>,
  // </React.StrictMode>
)
