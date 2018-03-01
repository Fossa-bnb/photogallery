import React from 'react';

const Spotlight = (props) => {
  return (
    <div className="spotlight">
      Spotlight
      <img src={props.photo.url}/>
    </div>
  )
}

export default Spotlight;