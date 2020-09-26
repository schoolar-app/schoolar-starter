import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import SchoolarApp  from 'schoolar-framework'

ReactDOM.render(
  <React.StrictMode>
    <SchoolarApp>
      <App />
    </SchoolarApp>
  </React.StrictMode>,
  document.getElementById('root')
);