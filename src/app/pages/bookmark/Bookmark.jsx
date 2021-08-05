import _ from 'lodash'

import CardArticle from "../../../common/components/cardArticle/CardArticle";

import styles from './Bookmark.module.scss';

const Bookmark = ({ dataBookmark, addBookmark }) => {
  const bookmarkList = [{}]
  const getArray = JSON.parse(localStorage.getItem('dataBookmark') || '0');
  for (let i = 0; i < getArray.length; i++) {
    let x = getArray[i]
    bookmarkList[i] = JSON.parse(localStorage.getItem(`bookmarkItem${x}`) || '')
  }

  const renderedBookmarkList = bookmarkList.map((bookmark) => {
    return _.isEmpty(bookmark) ? 
    'Anda Belum memiliki bookmark' : 
    <CardArticle 
    key={bookmark.id}
    title={bookmark.title}
    publisher={bookmark.publisher}
    url={bookmark.url.url}
    thumbnailHash={bookmark.thumbnail.hash}
    id={bookmark.id}
    article={bookmark}
    dataBookmark={dataBookmark}
    addBookmark={addBookmark}
    />
  })

  return (
    <div className={styles.bookmarkContainer}>
      {renderedBookmarkList}
    </div>
  )
}

export default Bookmark
