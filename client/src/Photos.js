import React from 'react';
import $ from 'jquery';
import Banner from './Banner';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{id: 0, caption: '', url: ''}, {id: 0, caption: '', url: ''}],
      galleryView: false
    }
  }

  componentDidMount() {
    const id = 81;
    $.ajax({
      url: `/${id}`,
      method: "GET",
      success: ({photos}) => {
        console.log(`Successful GET request for photos of ${id}`);
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
    this.setState({
      galleryView: true
    });
  }

  render() {
    return (
      <div className="photos-module">
        Photos Module
        <Banner 
          photo1URL={this.state.photos[0].url} 
          photo2URL={this.state.photos[1].url} 
          toggleGalleryView={this.toggleGalleryView.bind(this)} 
        />
      </div>
    )
  }
}

export default Photos;