import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Speech from './speech/Speech';
import App from './App';
import Footer from './pages/footer/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Footer />
    <Speech/>
  </React.StrictMode>
);
