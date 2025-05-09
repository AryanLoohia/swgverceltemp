import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';
import ReactGA from 'react-ga4';


ReactGA.initialize("G-SVDD7JT0B2");
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageView",
    page: window.location.pathname,
  });
};

reportWebVitals(SendAnalytics);


