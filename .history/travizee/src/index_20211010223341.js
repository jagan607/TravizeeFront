import React from 'react';
import {App} from './App';
import { Provider } from 'react-redux';
import { store } from './_helpers/store';
import { render } from 'react-dom';


window.id = ""


render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
