import React from 'react';
import Gallery from '../src/Gallery';
import { shallow } from 'enzyme';

describe ('Unit test for <Gallery /> Component', () => {
  it('should render a div with class name "gallery"', () => {
    const testPhotos = [{photoId: 2, url: 'testUrl', caption: 'testCaption'}, {photoId: 3, url: 'testUrl2', caption: 'testCaption2'}];
    const wrapper = shallow(<Gallery photos={testPhotos} />);
    expect(wrapper.find('div').first().hasClass('gallery')).toEqual(true);
  });

  it('should have default slideIndex state of 0', () => {
    const testPhotos = [{photoId: 2, url: 'testUrl', caption: 'testCaption'}, {photoId: 3, url: 'testUrl2', caption: 'testCaption2'}];
    const wrapper = shallow(<Gallery photos={testPhotos} />);
    expect(wrapper.state().slideIndex).toEqual(0);
  });

  it('should have default showThumbnails state of false', () => {
    const testPhotos = [{photoId: 2, url: 'testUrl', caption: 'testCaption'}, {photoId: 3, url: 'testUrl2', caption: 'testCaption2'}];
    const wrapper = shallow(<Gallery photos={testPhotos} />);
    expect(wrapper.state().showThumbnails).toEqual(false);
  });
});

// Gallery contract:
// should have state slideIndex default of 0, and showThumbnails default of false