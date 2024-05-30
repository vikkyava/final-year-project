import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import { createRoot } from 'react-dom';

import './index.css';
import App from './App';



const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

