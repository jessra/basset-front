import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/router';
import './index.css';
import { Contexto_DataProvider } from './Context/ContextoFunciones';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexto_DataProvider>
      <Router />
    </Contexto_DataProvider>
  </React.StrictMode>
);
