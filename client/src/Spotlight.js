import React from 'react';

const Spotlight = ({photo, numPhotos, plusSlides}) => {
  return (
    <div className="spotlight">
      <img className="spotlight-img" src={photo.url} alt={photo.caption} onClick={plusSlides} />
      <div className="spotlight-info">
        <div className="caption-container">
          <p id="caption">{photo.photoId} / {numPhotos}: &nbsp;{photo.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default Spotlight;