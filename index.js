import React from 'react';
import ReactDOM from 'react-dom';
import { SchoolarApp } from 'doughnut-ui'
import App from './src/App';

ReactDOM.render(
  <React.StrictMode>
    <SchoolarApp>
      <App />
    </SchoolarApp>
  </React.StrictMode>,
  document.getElementById('root')
);