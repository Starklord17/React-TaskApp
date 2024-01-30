import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/index';
import './index.css';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found in the document.");
}
