import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Здесь используется функция render, а не createRoot
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
