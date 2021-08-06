import { Card, Button } from 'react-bootstrap';

import styles from './CardArticle.module.scss';

const CardArticle = ({ title, publisher, url, thumbnailHash, dataBookmark, addBookmark, id, article }) => {
  return (
    <div className={styles.listCard}>
      <Card className={styles.card}>
        <a href={url}>
          <Card.Img className={styles.cardImg} variant="top" src={`https://obs.line-scdn.net/${thumbnailHash}`} />
          <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>{title}</Card.Title>
            <Card.Text className={styles.cardSubtitle}>
              {publisher}
            </Card.Text>
          </Card.Body>
        </a>
        {dataBookmark.includes(id) ? 
          <Button 
            className={styles.cardRemoveBtn}
            onClick={() => addBookmark(article, id)}>Remove Bookmark</Button>
        : 
          <Button 
            className={styles.cardBtn}
            onClick={() => addBookmark(article, id)}>Bookmark</Button>}
      </Card>
    </div>
  )
}

export default CardArticle
