import React from 'react';

const Thumbnail = ({photoId, url, makeCurrentSlide}) => {
  return (
    <div className="thumbnail">
      <img className="thumbnail-img" onClick={() => {makeCurrentSlide(photoId - 1)}} src={url} />
    </div>
  )
}

export default Thumbnail;