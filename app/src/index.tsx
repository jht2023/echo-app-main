import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'react-jss';
import { AppContextProvider } from './app-context';

import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './app-theme';

import Routes from "./routes";
import makeAppContextValue from "./factories/make-app-context-value";


console.log("loading");
makeAppContextValue()
  .then(appContextValue => {
    console.log("Context loaded")
    ReactDOM.render(
      <AppContextProvider value={appContextValue}>
      <React.StrictMode>
        {/* <App /> */}
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </React.StrictMode>,
      </AppContextProvider>,
      document.getElementById('root')
    );
  })

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
