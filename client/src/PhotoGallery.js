import React from 'react';
import $ from 'jquery';
import Banner from './Banner';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{id: 0, caption: '', url: ''}, {id: 0, caption: '', url: ''}],
    }
  }

  componentDidMount() {
    const id = 80;
    $.ajax({
      url: `/${id}`,
      method: "GET",
      success: ({photos}) => {
        console.log(`Successful GET request for photos of ${id}`);
        console.log(`Got back these photos on the client: ${photos.length}`);
        this.setState({
          photos: photos
        });
      },
      error: (err) => {
        console.log(`Error in GET request from client: ${err}`);
      }
    })
  }

  toggleGalleryView() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="photo-gallery">
        Photo Gallery Module
        <Banner 
          photo1URL={this.state.photos[0].url} 
          photo2URL={this.state.photos[1].url} 
          toggleGalleryView={this.toggleGalleryView.bind(this)} 
        />
      </div>
    )
  }
}

export default PhotoGallery;