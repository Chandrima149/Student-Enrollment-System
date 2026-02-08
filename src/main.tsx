// // src/main.tsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';           // ← only one ReactDOM import
// import { BrowserRouter } from 'react-router-dom';

// import App from './App.tsx';                       // ← only one App import
// import './index.css';                              // if you have global styles

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)