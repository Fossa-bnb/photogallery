import React from 'react';
import styles from './styles.css';

const Banner = ({photo1URL, photo2URL, toggleGalleryView}) => {
  return (
    <div className={ styles.banner } onClick={toggleGalleryView}>
      <img className={ styles.left_img }  src={photo1URL}/>
      <img className={ styles.right_img } src={photo2URL}/>
      <button>View Photos</button>
    </div>
  )
}; 

export default Banner;