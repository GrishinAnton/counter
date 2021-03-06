import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { App } from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { history } from './common/utils/history';

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
