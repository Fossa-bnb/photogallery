import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  closeModal() {
    console.log('closeModal called');
  }

  plusSlides(moveBy) {
    console.log('plus slides invoked');
  }
  
  render() {
    if (this.props.galleryView) {
      return (
        <div className="gallery">
          This is a Gallery View 
          <div id="myModal" className="modal">
            <span className="close cursor" onClick={this.closeModal.bind(this)}>&times;</span>
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
  
  
  
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          No Gallery View
        </div>
      )
    }
  }
}

export default Gallery