import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import configureAxios from "../src/api/configureAxios"

configureAxios();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);