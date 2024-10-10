// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './storage'; // Ensure this path is correct
import reportWebVitals from './reportWebVitals';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application wrapped in the Provider
root.render(
  <Provider store={store}>  {/* Wrap App with Provider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// Optional: Report web vitals
reportWebVitals();