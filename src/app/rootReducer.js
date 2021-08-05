import { combineReducers } from 'redux';

import articleReducer from '../features/article/articleReducer';

export const rootReducer = combineReducers({
  article: articleReducer,
});