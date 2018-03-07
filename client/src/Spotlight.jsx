import React from 'react';
import styles from './styles.css';

const Spotlight = ({photo, numPhotos, shiftSlide, toggleThumbnailsOn, toggleThumbnailsOff}) => {
  return (
    <div className={ styles.spotlight }>
      <img className={ styles.spotlightImg } src={photo.url} alt={photo.caption} onClick={() => {shiftSlide(1)}} />
      <div className={ styles.spotlightInfo} >
        <div className={ styles.captionContainer} >
          <p id={ styles.caption }>{photo.photoId} / {numPhotos}: &nbsp;{photo.caption}</p>
        </div>
        <div className={ styles.toggleThumbnails } onMouseEnter={toggleThumbnailsOn}>
          <div className={ styles.hiddenThumbnails } >
            <p>Show Photo List</p>
          </div>
          <div className={ styles.shownThumbnails } onClick={toggleThumbnailsOff} >
            <p>Hide Photo List</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spotlight;