// Importando o React de react e ReactDOM de react-dom e o App de App.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Renderizando o App.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);