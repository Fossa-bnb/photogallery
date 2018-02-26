import React from 'react';

const Banner = ({photo1URL, photo2URL}) => {
  return (
    <div className="banner">
      <img src={photo1URL}/>
      <img src={photo2URL}/>
    </div>
  )
}; 

export default Banner;