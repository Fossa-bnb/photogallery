import React from 'react';
import Spotlight from './Spotlight';
import ThumbnailList from './ThumbnailList';
import $ from 'jquery';
import styles from './styles.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      showThumbnails: false
    }
  }

  componentDidMount() {
    this.showSlides(this.state.slideIndex);
  }
  
  // increment spotlight slide using arrow
  shiftSlide(n) {
    this.showSlides(this.state.slideIndex += n)
  }

  // make current spotlight slide using thumbnail click
  makeCurrentSlide(n) {
    this.showSlides(n)
  }

  toggleThumbnailsOn() {

    $(`.${styles.shownThumbnails}`).css({'display':'block'});
    $(`.${styles.hiddenThumbnails}`).css({'display':'none'});

    this.setState({
      showThumbnails: true
    })
    

  }

  toggleThumbnailsOff() {




    this.setState({
      showThumbnails: false
    })

    $(`.${styles.shownThumbnails}`).css({'display':'none'});
    $(`.${styles.hiddenThumbnails}`).css({'display': 'block'});

  }

  showSlides(n) {
    let i;
    let slideIndex = n
    let slides = this.props.photos;
    let thumbnails = this.props.photos;

    if (n > slides.length) {
      n = 1;
    }
    if (n < 0) {
      n = slides.length - 1;
    }

    if (this.showThumbnails) {
      $(`thumbnail${slideIndex}`).css({'opacity': 1});
    }
    
    this.setState({
      slideIndex: n % this.props.photos.length
    })
  }

  render() {
    return (
      <div className={ styles.gallery }>
        <span className={ styles.close } onClick={this.props.toggleGalleryView} >&#x2715;</span>
        
        <div className={ styles.spotlightContainer }>
          
          <div className={ styles.prev }onClick={this.shiftSlide.bind(this, -1)}>
            <img className={ styles.arrow } src="https://www.imaginovation.net/wp-content/themes/imaginovation/images/arrow-left.png"/>
          </div>

          <Spotlight 
            shiftSlide={this.shiftSlide.bind(this, 1)} 
            photo={this.props.photos[this.state.slideIndex]} 
            numPhotos={this.props.photos.length} 
            toggleThumbnailsOn={this.toggleThumbnailsOn.bind(this)}
            toggleThumbnailsOff={this.toggleThumbnailsOff.bind(this)}
          />

          <div className={ styles.next } onClick={this.shiftSlide.bind(this, 1)}>
            <img className={ styles.arrow } src="https://www.timehotel.se/layouts/fullwidth-core/images/icons/arrow-right.png"/>
          </div>

        </div>
        <ThumbnailList 
          photos={this.props.photos} 
          makeCurrentSlide={this.makeCurrentSlide.bind(this)} 
          showThumbnails={this.state.showThumbnails} 
        />

      </div>
    )
  }
}

export default Gallery;