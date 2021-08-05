import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const middlewares = applyMiddleware(thunk);

const composedEnhancers = composeWithDevTools(middlewares);

const storeEnhancer = composedEnhancers;

export const store = createStore(rootReducer, storeEnhancer);