import * as api from './articleAPI';
import * as actions from './articleActions';

const fetchArticleData = () => async (dispatch) => {
  dispatch(actions.fetchArticleData.pending());

  try {
    const { result } = await api.fetchArticleData();

    dispatch(actions.fetchArticleData.fulfilled(result));
  } catch (err) {
    dispatch(actions.fetchArticleData.rejected());
  }
}

export { fetchArticleData }