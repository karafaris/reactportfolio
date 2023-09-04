// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the CSS file for styling
import './index.css';

// Import the main component of the application
import App from './App';

// Create a root element in the DOM with the id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main React component within a <React.StrictMode>
// This is a development mode feature that helps catch potential issues in the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: If you want to start measuring performance in your app, 
// you can pass a function to log results (for example, using the Web Vitals library)
// or send data to an analytics endpoint. 
// You can learn more about this by visiting the provided link.
// This part is typically used for performance monitoring and optimization.
// It's commented out for now.
// reportWebVitals(console.log)
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
