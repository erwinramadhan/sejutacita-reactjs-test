import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import styles from './TopCarousel.module.scss'

const TopCarousel = ({ articleCarousel }) => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderedCarouselItem = articleCarousel && articleCarousel.map((article) => (
    <Carousel.Item className={styles.carouselItem}>
      <img className={styles.carouselImage} src={`https://obs.line-scdn.net/${article.thumbnail.hash}`} alt={article.title.replace(/\s+/g, '-').toLowerCase()} />
      <Carousel.Caption className={styles.carouselCaption}>
        <h3  className={styles.carouselCaptionTitle}>{article.title}</h3>
        <p className={styles.carouselCaptionPublisher}>{article.publisher}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ))

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {renderedCarouselItem}
    </Carousel>
  )
}

export default TopCarousel