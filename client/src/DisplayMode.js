import React from 'react';
import Gallery from './Gallery';

const DisplayMode = (props) => {
  if (props.galleryView) {
    return (
      <div className="display-mode">
        <Gallery 
          photos={props.photos}
          toggleGalleryView={props.toggleGalleryView}
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