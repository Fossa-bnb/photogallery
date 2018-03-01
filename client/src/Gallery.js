import React from 'react';
import Spotlight from './Spotlight';
import ThumbnailList from './ThumbnailList';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    }
  }

  componentDidMount() {
    this.showSlides(this.state.slideIndex);
  }

  plusSlides(n) {
    this.showSlides(this.state.slideIndex += n)
  }

  currentSlide(n) {
    this.showSlides(this.state.slideIndex = n)
  }

  showSlides(n) {
    let i;
    let slideIndex = n
    let slides = this.props.photos;
    let thumbnails = this.props.photos;

    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = slides.length;
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

          <Spotlight photo={this.props.photos[this.state.slideIndex]} numPhotos={this.props.photos.length}/>

          <div className="next" onClick={this.plusSlides.bind(this, 1)}>
            <img className="arrow" src="https://www.timehotel.se/layouts/fullwidth-core/images/icons/arrow-right.png"/>
          </div>

        </div>
        <ThumbnailList photos={this.props.photos} currentSlide={this.currentSlide.bind(this)}/>

      </div>
    )
  }
}

export default Gallery;