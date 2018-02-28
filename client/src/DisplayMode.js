import React from 'react';
import Gallery from './Gallery';

const DisplayMode = (props) => {
  if (props.galleryView) {
    return (
      <div>
        <Gallery 
          photos={props.photos}
          toggleGalleryView={props.toggleGalleryView}
        />
      </div>
    )
  }
  return (
    <div>
      Not Gallery View
    </div>
  )

}

export default DisplayMode;