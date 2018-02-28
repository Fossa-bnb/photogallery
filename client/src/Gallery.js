import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1
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
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('demo');
    let captionText = document.getElementById('caption');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0) {
      slides[slideIndex - 1].style.display = 'block';
    }
    if (dots.length > 0) {
      dots[slideIndex - 1].className += " active";
      captionText.innerHTML = dots[slideIndex - 1].alt;
    }

    this.setState({
      slideIndex: n
    })

  }
  
  render() {
    return (
      <div className="gallery">
        This is a Gallery View 
        <div id="myModal" className="modal">
          <span className="close cursor" onClick={this.props.toggleGalleryView}>&times;</span>
          <div className="modal-content">

            <div className="mySlides">
              <div className="numbertext">1 / 4</div>
              <img src={this.props.photos[0].url} style={{ width: '100%'}}/>
            </div>

            <div className="mySlides">
              <div className="numbertext">2 / 4</div>
              <img src={this.props.photos[1].url} style={{ width: '100%'}}/>
            </div>

            <div className="mySlides">
              <div className="numbertext">3 / 4</div>
              <img src={this.props.photos[2].url} style={{ width: '100%'}}/>
            </div>

            <div className="mySlides">
              <div className="numbertext">4 / 4</div>
              <img src={this.props.photos[3].url} style={{ width: '100%'}}/>
            </div>

            <a className="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
            <a className="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>

            <div className="caption-container">
              <p id="caption"></p>
            </div>

            <div className="column">
              <img className="demo" src={this.props.photos[0].url} onClick={this.currentSlide.bind(this, 1)} alt="Nature"/>
            </div>

            <div className="column">
              <img className="demo" src={this.props.photos[1].url} onClick={this.currentSlide.bind(this, 2)} alt="Nature"/>
            </div>

            <div className="column">
              <img className="demo" src={this.props.photos[2].url} onClick={this.currentSlide.bind(this, 3)} alt="Nature"/>
            </div>

            <div className="column">
              <img className="demo" src={this.props.photos[3].url} onClick={this.currentSlide.bind(this, 4)} alt="Nature"/>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Gallery