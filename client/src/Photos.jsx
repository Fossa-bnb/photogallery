import React from 'react';
import $ from 'jquery';
import Banner from './Banner';
import Gallery from './Gallery';
import DisplayMode from './DisplayMode';
import styles from './styles.css';

const PORT = process.env.PORT || 3000;
const url = `http://localhost:${PORT}`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{id: 0, caption: '', url: ''}, {id: 0, caption: '', url: ''}],
      galleryView: false
    }
  }

  componentDidMount() {
    const id = this.props.id;
    $.ajax({
      url: `${url}/${id}`,
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
      galleryView: !this.state.galleryView
    });
  }

  render() {
    return (
      <div className="photos-module">
        <Banner 
          photo1URL={this.state.photos[0].url} 
          photo2URL={this.state.photos[1].url} 
          toggleGalleryView={this.toggleGalleryView.bind(this)} 
        />
        <DisplayMode 
          photos={this.state.photos}
          galleryView={this.state.galleryView}
          toggleGalleryView={this.toggleGalleryView.bind(this)} 
        />
      </div>
    )
  }
}

window.Photos = Photos;