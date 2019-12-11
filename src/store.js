import { createStore, compose } from 'redux';
import {brandlist} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function initStore(preloadedState) {
    return createStore(
        brandlist,
        preloadedState,
        composeEnhancers()
    );
}