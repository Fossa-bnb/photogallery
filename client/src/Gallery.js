import React from 'react';

const Gallery = (props) => {
  const galleryView = props.galleryView;

  if (galleryView) {
    return (
      <div className="gallery">
        Gallery View
      </div>
    )
  }
  return (
    <div>
      No Gallery View
    </div>
  )
  
}

export default Gallery