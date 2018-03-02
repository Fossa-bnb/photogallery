import React from 'react';

const Spotlight = ({photo, numPhotos}) => {
  return (
    <div className="spotlight">
      <img className="spotlight-img" src={photo.url} alt={photo.caption} />
      <div className="spotlight-info">
        <div className="caption-container">
          <p id="caption">{photo.photoId} / {numPhotos} &nbsp;&nbsp;{photo.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default Spotlight;