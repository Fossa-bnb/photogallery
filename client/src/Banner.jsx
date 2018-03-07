import React from 'react';
import styles from './styles.css';

const Banner = ({photo1URL, photo2URL, toggleGalleryView}) => {
  return (
    <div className={ styles.banner } onClick={toggleGalleryView}>
      <img className={ styles.leftImg }  src={photo1URL}/>
      <img className={ styles.rightImg } src={photo2URL}/>
      <button className={ styles.viewBtn } >View Photos</button>
    </div>
  )
}; 

export default Banner;