import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Ubah dari `serviceWorker.unregister()` menjadi `serviceWorker.register()`
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Pendaftaran Service Worker
serviceWorkerRegistration.register();

reportWebVitals();
