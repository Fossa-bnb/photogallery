import React from 'react';

const Banner = ({photo1URL, photo2URL, toggleGalleryView}) => {
  return (
    <div className="banner" onClick={toggleGalleryView}>
      <img className="left-img img-responsive"  src={photo1URL}/>
      <img className="right-img img-responsive" src={photo2URL}/>
      <button>View Photos</button>
    </div>
  )
}; 

export default Banner;