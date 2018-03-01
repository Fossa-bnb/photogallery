import React from 'react';

const Thumbnail = (props) => {
  return (
    <div className="thumbnail-container">
      <div className="thumbnail">
        <img className="thumbnail-img" src={props.photo.url} />
      </div>
    </div>
  )
}

export default Thumbnail;