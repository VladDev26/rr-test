import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import {helloReducer} from './reducers';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const store = configureStore(initialState);


function configureStore(initialState) {
    return createStore(
        combineReducers({helloReducer}),
        initialState,
        composeEnhancers(applyMiddleware(thunk, logger))
    );
}

export default store;