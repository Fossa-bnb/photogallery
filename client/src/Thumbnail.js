import React from 'react';

const Thumbnail = (props) => {
  return (
    <div className="thumbnail">
      <img className="thumbnail-img" onClick={() => {props.currentSlide(props.index)}} src={props.photo.url} />
    </div>
  )
}

export default Thumbnail;