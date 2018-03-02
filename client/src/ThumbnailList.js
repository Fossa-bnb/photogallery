import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailList = ({photos, currentSlide}) => {
  return (
    <div className="thumbnail-list">
      {photos.map(({photoId, url}, index) => {
        return <Thumbnail key={index} photoId={photoId} url={url} currentSlide={currentSlide} />
      })}
    </div>
  )
}

export default ThumbnailList;
