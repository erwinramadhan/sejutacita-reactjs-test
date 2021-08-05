import * as types from './articleTypes';

const fetchArticleData = {
  pending() {
    return { type: types.fetchArticleData.pending};
  },
  fulfilled(article) {
    return { 
      type: types.fetchArticleData.fulfilled,
      payload: article,
    };
  },
  rejected() {
    return { type: types.fetchArticleData.rejected};
  }
}

export { fetchArticleData };