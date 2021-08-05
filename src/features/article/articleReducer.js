import * as types from './articleTypes';

import { IDLE, PENDING, FULFILLED, REJECTED } from '../../services/enums';

const INITIAL_STATE = {
  categoryList: [],
  categories: [],
  articleFetchStatus: IDLE,
  articleFetchError: false,
}

const articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.fetchArticleData.pending: {
      return {
        ...state,
        categoryList: [],
        categories: [],
        articleFetchStatus: PENDING,
        articleFetchError: false,
      }
    }
    case types.fetchArticleData.fulfilled: {
      const { categoryList, categories } = action.payload;
      return {
        ...state,
        categoryList: categoryList,
        categories: categories,
        articleFetchStatus: FULFILLED,
      }
    }
    case types.fetchArticleData.rejected: {
      return {
        ...state,
        articleFetchStatus: REJECTED,
        articleFetchError: true,
      }
    }
    default:
      return state;
  }
}

export default articleReducer;