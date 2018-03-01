import React from 'react';

const Spotlight = (props) => {
  return (
    <div className="spotlight">
      <img className="spotlight-img" src={props.photo.url}/>
    </div>
  )
}

export default Spotlight;