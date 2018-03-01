import React from 'react';

const Spotlight = (props) => {
  return (
    <div className="spotlight">
      <img className="spotlight-img" src={props.photo.url} alt={props.photo.caption} />
      <div className="spotlight-info">
        <div className="caption-container">
          <p id="caption">{props.photo.photoId} / {props.numPhotos} &nbsp;&nbsp;{props.photo.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default Spotlight;