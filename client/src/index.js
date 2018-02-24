//console.log('My minimal React Webpack Babel Setup');

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
   }
   
   componentDidMount() {
     //initiate ajax request to the server with a particular id
     //setup a route on the server to receive get request to endpoint /id
     const id = 5;
     $.ajax({
       url: `/${id}`,
       method: "GET",
       success: (data) => {
         console.log(`Successful GET request for photos of ${id}`);
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

ReactDOM.render(
  <PhotoGallery />,
  document.getElementById('app')
);