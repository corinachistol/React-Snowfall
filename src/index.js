import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import { Snowfall } from './flake/ui';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Snowfall />
  </React.StrictMode>
);

