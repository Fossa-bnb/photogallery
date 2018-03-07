import React from 'react';
import Thumbnail from './Thumbnail';
import styles from './styles.css';

const ThumbnailList = ({photos, makeCurrentSlide, showThumbnails}) => {
  if (showThumbnails) {
    return (
      <div className={ styles.thumbnailList }>
        {photos.map(({photoId, url}, index) => {
          return <Thumbnail key={index} photoId={photoId} url={url} makeCurrentSlide={makeCurrentSlide} />
        })}
      </div>
    )
  } else {
    return (
      <div className={ styles.thumbnailList }>
      </div>
    )
  }

}

export default ThumbnailList;
