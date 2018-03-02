import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailList = ({photos, currentSlide, showThumbnails}) => {
  if (showThumbnails) {
    return (
      <div className="thumbnail-list">
        {photos.map(({photoId, url}, index) => {
          return <Thumbnail key={index} photoId={photoId} url={url} currentSlide={currentSlide} />
        })}
      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }

}

export default ThumbnailList;
