import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { hashHistory } from 'react-router-3';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk,)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </ Provider>,
    document.getElementById('app')
);