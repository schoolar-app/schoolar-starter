import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { SchoolarApp } from 'doughnut-ui'

ReactDOM.render(
  <React.StrictMode>
    <SchoolarApp>
      <App />
    </SchoolarApp>
  </React.StrictMode>,
  document.getElementById('root')
);