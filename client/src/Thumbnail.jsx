import React from 'react';
import styles from './styles.css';

const Thumbnail = ({photoId, url, makeCurrentSlide}) => {
  return (
    <div className={ styles.thumbnail }>
      <div className={`thumbnail${photoId}`}>
        <img className={ styles.thumbnailImg } onClick={() => {makeCurrentSlide(photoId - 1)}} src={url} />
      </div>
    </div>
  )
}

export default Thumbnail;