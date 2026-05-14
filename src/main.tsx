import * as React from 'react'; // ensures TS knows what JSX.Element is
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import "./i18n";


const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
