import { useSelector } from "react-redux";

import { articleSelectors } from "../../../features/article"

import styles from './CategoriesBar.module.scss';

import CategoryItem from "./CategoryItem";

const CategoriesBar = () => {
  const categoryList = useSelector(articleSelectors.selectCategoryList);
  const articleFetchStatus = useSelector(articleSelectors.selectArticleFetchStatus);

  const renderedCategoriesItem = articleFetchStatus === 'fulfilled' ? categoryList.map((category) => ( <CategoryItem key={category.id} name={category.name}/> )) : '';

  return (
    <div className={styles.containerCategoriesBar}>
    <div className={styles.categoriesTitleBar} >
      <h5 className={styles.titleBar}>Category</h5>
    </div>
    <div className={styles.categoriesBar}>
      {renderedCategoriesItem}
    </div>
    </div>
  )
}

export default CategoriesBar
