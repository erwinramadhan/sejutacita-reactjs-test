// import { createSelector } from "reselect";

const selectCategoryList = (state) => state.article.categoryList;
const selectCategories = (state) => state.article.categories;

const selectArticleFetchStatus = (state) => state.article.articleFetchStatus;

export { selectArticleFetchStatus, selectCategories, selectCategoryList };