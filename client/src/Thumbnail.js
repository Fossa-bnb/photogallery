import React from 'react';

const Thumbnail = (props) => {
  return (
    <div className="thumbnail">
      <img src={props.photo.url} />
    </div>
  )
}

export default Thumbnail;