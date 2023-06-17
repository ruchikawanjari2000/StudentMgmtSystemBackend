import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DarkModeContextProvider } from './Context/DarkModeContext';
import { Provider } from 'react-redux/es';
import Store from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

