import React from 'react';

const Thumbnail = ({photoId, url, currentSlide}) => {
  return (
    <div className="thumbnail">
      <img className="thumbnail-img" onClick={() => {currentSlide(photoId - 1)}} src={url} />
    </div>
  )
}

export default Thumbnail;