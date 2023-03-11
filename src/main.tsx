import {
  ApolloClient, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import ReactDOM from 'react-dom/client';

import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:3000',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
