import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);

reportWebVitals();
