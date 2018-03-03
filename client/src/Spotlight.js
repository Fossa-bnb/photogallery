import React from 'react';

const Spotlight = ({photo, numPhotos, shiftSlide, toggleThumbnailsOn, toggleThumbnailsOff}) => {
  return (
    <div className="spotlight">
      <img className="spotlight-img" src={photo.url} alt={photo.caption} onClick={() => {shiftSlide(1)}} />
      <div className="spotlight-info">
        <div className="caption-container">
          <p id="caption">{photo.photoId} / {numPhotos}: &nbsp;{photo.caption}</p>
        </div>
        <div className="toggle-thumbnails" onMouseEnter={toggleThumbnailsOn}>
          <div className="hidden-thumbnails">
            <p>Show Photo List</p>
          </div>
          <div className="shown-thumbnails" onClick={toggleThumbnailsOff} >
            <p>Hide Photo List</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spotlight;