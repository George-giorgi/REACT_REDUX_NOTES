import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {NoteReducer, conditionReducer} from "./reducers/notReducer"

import { createStore, combineReducers } from 'redux'
import {Provider} from "react-redux"

const comb = combineReducers(
  {
    notes: NoteReducer,
    condition: conditionReducer
  }
)
const store = createStore(
  comb,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


