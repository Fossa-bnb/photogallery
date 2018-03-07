import React from 'react';
import styles from './styles.css';

const Thumbnail = ({photoId, url, makeCurrentSlide}) => {
  return (
    <div className={ styles.thumbnail }>
      <img className={ styles.thumbnailImg } onClick={() => {makeCurrentSlide(photoId - 1)}} src={url} />
    </div>
  )
}

export default Thumbnail;