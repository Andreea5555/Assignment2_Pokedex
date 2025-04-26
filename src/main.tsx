import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//the only things we do here are reder the app in StrictMode (catches bugs easier)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);