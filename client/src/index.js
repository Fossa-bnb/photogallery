import React from 'react';
import ReactDOM from 'react-dom';
import Photos from './Photos';
import styles from './styles.css';

console.log(styles);

ReactDOM.render(
  <Photos myId={2} />,
  document.getElementById('app')
);