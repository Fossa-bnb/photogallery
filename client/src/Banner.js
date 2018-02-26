import React from 'react';

const Banner = (props) => {
  return (
    <div className="banner">
      <img src={props.photo1.url}/>
      <img src={props.photo2.url}/>
    </div>
  )
}; 



export default Banner;