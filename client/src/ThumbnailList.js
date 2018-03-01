import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailList = (props) => {
  return (
    <div className="thumbnail-list">
      {props.photos.map((photo, index) => {
        return <Thumbnail key={index} index={index} photoId={photo.photoId} url={photo.url} currentSlide={props.currentSlide} />
      })}
    </div>
  )
}

export default ThumbnailList;
