import React from 'react';
import Gallery from './Gallery';

const DisplayMode = ({galleryView, toggleGalleryView, photos}) => {
  if (galleryView) {
    return (
      <div className="display-mode">
        <Gallery 
          photos={photos}
          toggleGalleryView={toggleGalleryView}
        />
      </div>
    )
  }
  return (
    <div className="display-mode">
    </div>
  )
}

export default DisplayMode;