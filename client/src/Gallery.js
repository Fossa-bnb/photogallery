import React from 'react';
import Spotlight from './Spotlight';
import ThumbnailList from './ThumbnailList';
import $ from 'jquery';

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
  plusSlides(n) {
    this.showSlides(this.state.slideIndex += n)
  }

  // make current spotlight slide using thumbnail click
  currentSlide(n) {
    this.showSlides(this.state.slideIndex = n)
  }

  toggleThumbnails() {

    this.setState({
      showThumbnails: !this.state.showThumbnails
    })

    if (this.state.showThumbnails) {
      $('.shown-thumbnails').css({'display':'none'});
      $('.hidden-thumbnails').css({'display': 'block'});
    } else {
      $('.shown-thumbnails').css({'display':'block'});
      $('.hidden-thumbnails').css({'display': 'none'});
    }
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


    this.setState({
      slideIndex: n % this.props.photos.length
    })
  }

  render() {
    return (
      <div className="gallery">
        <span className="close" onClick={this.props.toggleGalleryView}>&#x2715;</span>
        
        <div className="spotlight-container">
          
          <div className="prev" onClick={this.plusSlides.bind(this, -1)}>
            <img className="arrow" src="https://www.imaginovation.net/wp-content/themes/imaginovation/images/arrow-left.png"/>
          </div>

          <Spotlight plusSlides={this.plusSlides.bind(this, 1)} photo={this.props.photos[this.state.slideIndex]} numPhotos={this.props.photos.length} toggleThumbnails={this.toggleThumbnails.bind(this)} />

          <div className="next" onClick={this.plusSlides.bind(this, 1)}>
            <img className="arrow" src="https://www.timehotel.se/layouts/fullwidth-core/images/icons/arrow-right.png"/>
          </div>

        </div>
        <ThumbnailList photos={this.props.photos} currentSlide={this.currentSlide.bind(this)} toggleThumbnails={this.toggleThumbnails.bind(this)} showThumbnails={this.state.showThumbnails} />

      </div>
    )
  }
}

export default Gallery;