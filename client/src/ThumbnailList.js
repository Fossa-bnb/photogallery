import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailList = ({photos, makeCurrentSlide, showThumbnails}) => {
  if (showThumbnails) {
    return (
      <div className="thumbnail-list">
        {photos.map(({photoId, url}, index) => {
          return <Thumbnail key={index} photoId={photoId} url={url} makeCurrentSlide={makeCurrentSlide} />
        })}
      </div>
    )
  } else {
    return (
      <div className="thumbnail-list">
      </div>
    )
  }

}

export default ThumbnailList;
