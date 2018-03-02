import React from 'react';

const Spotlight = ({photo, numPhotos, plusSlides, toggleThumbnails}) => {
  return (
    <div className="spotlight">
      <img className="spotlight-img" src={photo.url} alt={photo.caption} onClick={plusSlides} />
      <div className="spotlight-info">
        <div className="caption-container">
          <p id="caption">{photo.photoId} / {numPhotos}: &nbsp;{photo.caption}</p>
        </div>
        <div className="toggle-thumbnails">
          <div className="hidden-thumbnails" onMouseOver={toggleThumbnails}>
            <p>Show Photo List</p>
          </div>
          <div className="shown-thumbnails" onClick={toggleThumbnails} >
            <p>Hide Photo List</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spotlight;