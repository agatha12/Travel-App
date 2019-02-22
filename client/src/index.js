import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import combineReducers from './reducers/index';
import {loadState, saveState} from './localStorage';

const persistedState = loadState();
const store = createStore(combineReducers, persistedState);

store.subscribe(() => {
    saveState(store.getState())
})

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
