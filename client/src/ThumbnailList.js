import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailList = (props) => {
  return (
    <div className="thumbnail-list">
      {props.photos.map((photo, index) => {
        return <Thumbnail key={index} photo={photo} />
      })}
    </div>
  )
}

export default ThumbnailList;
