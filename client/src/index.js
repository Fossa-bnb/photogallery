import React from 'react';
import ReactDOM from 'react-dom';
import Photos from './Photos';
import styles from './app.css';

ReactDOM.render(
  <Photos myId={2} />,
  document.getElementById('app')
);