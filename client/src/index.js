//console.log('My minimal React Webpack Babel Setup');

import React from 'react';
import ReactDOM from 'react-dom';


class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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