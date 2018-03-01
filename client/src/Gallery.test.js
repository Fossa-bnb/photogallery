import React from 'react';
import Gallery from './Gallery';
import { shallow } from 'enzyme';

describe ('Unit test for <Gallery /> Component', () => {
  it('should render a div with class name "gallery"', () => {
    const testPhotos = [{photoId: 2, url: 'testUrl', caption: 'testCaption'}, {photoId: 3, url: 'testUrl2', caption: 'testCaption2'}];
    const wrapper = shallow(<Gallery photos={testPhotos} />);
    expect(wrapper.find('div').first().hasClass('gallery')).toEqual(true);
  });

  // it should conditionally render based on click
});