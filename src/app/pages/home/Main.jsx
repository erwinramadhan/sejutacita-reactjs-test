import CardArticle from "../../../common/components/cardArticle/CardArticle";

import styles from './Main.module.scss';

const Main = ({ articles, dataBookmark, addBookmark }) => {
  const renderedArticles = articles && articles.map((article) => (
    <CardArticle 
      key={article.id} 
      title={article.title} 
      publisher={article.publisher} 
      url={article.url.url} 
      thumbnailHash={article.thumbnail.hash}
      dataBookmark={dataBookmark}
      addBookmark={addBookmark}
      article={article}
      id={article.id} />))
  return (
    <div className={styles.mainContainer}>
      {renderedArticles}
    </div>
  )
}

export default Main
