import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/JennaSue.ttf';
import './assets/fonts/Gordita_Black.otf';
import './assets/fonts/Gordita_Bold.otf';
import './assets/fonts/Gordita_Light.otf';
import './assets/fonts/Gordita_Medium.otf';
import './assets/fonts/Gordita_Regular.otf';
import './assets/fonts/Gordita_Thin.otf';
import './assets/fonts/Gordita_Ultra.otf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
