import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducers';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({});


function configureStore(initialState) {
    return createStore(
        combineReducers({reducer}),
        initialState,
        composeEnhancers(applyMiddleware(thunk, logger))
    );
}

export default store;