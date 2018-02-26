import React from 'react';
import $ from 'jquery';


class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    //initiate ajax request to the server with a particular id
    //setup a route on the server to receive get request to endpoint /id
    const id = 5;
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

  render() {
    return (
      <div className="photo-gallery">
        Photo Gallery Module
      </div>
    )
  }
}

export default PhotoGallery;