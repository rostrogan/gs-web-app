import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore, combineReducers} from 'redux';

import * as reducers from './ducks';

let dispatch;
let getState;

const configureStore = () => {
    const rootReducer = combineReducers({
        ...reducers
    });
    const middlewares = [promise, thunk];

    const middleware = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, middleware);
    dispatch = store.dispatch;
    getState = store.getState;

    return store;
};

export {
    configureStore,
    dispatch,
    getState,
}