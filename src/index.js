import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { StoreProvider } from './store/RootStateContext';
import RootStore from './store/RootStore';

const stores = new RootStore();

ReactDOM.render(
  <StoreProvider stores={stores}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
