import React from 'react';

const Banner = ({photo1URL, photo2URL, toggleGalleryView}) => {
  return (
    <div className="banner">
      <img src={photo1URL}/>
      <img src={photo2URL}/>
      <button onClick={toggleGalleryView}>View Photos</button>
    </div>
  )
}; 

export default Banner;