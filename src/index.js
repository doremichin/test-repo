import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as Sentry from '@sentry/react';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import './i18n/index';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {Integrations} from "@sentry/tracing";


const client = new ApolloClient({
    uri:
        process.env.REACT_APP_ENV === 'production'
            ? 'https://apiv1.luxrobo.com/gateway/graphql'
            : 'https://dev-apiv1.luxrobo.com/gateway/graphql',
    cache: new InMemoryCache(),
});

Sentry.init({
    dsn: 'https://8f4a6204d83342528e2473ee86dfe710@o444513.ingest.sentry.io/5705711',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

ReactDOM.render(
      <BrowserRouter>
          <ApolloProvider client={client}>
              <App />
          </ApolloProvider>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
