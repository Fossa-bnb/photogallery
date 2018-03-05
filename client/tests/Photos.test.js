import React from 'react';
import Photos from '../src/Photos';
import { shallow } from 'enzyme';

describe('Unit Test for <Photos /> Component', () => {
  it('should render a div with class "photos-module"', () => {
    const wrapper = shallow(<Photos />);
    expect(wrapper.find('div').hasClass('photos-module')).toEqual(true);
  });
  
  it('should initially render with an array of two empty photo objects', () => {
    const wrapper = shallow(<Photos />);
    expect(wrapper.state().photos.length).toEqual(2);
  });
  
  it('should have a toggleGalleryView function', () => {
    const wrapper = shallow(<Photos />);
    expect(wrapper.instance().toggleGalleryView).toBeDefined();
  });

  it('should change galleryView state to true when toggleGalleryView is invoked', () => {
    const wrapper = shallow(<Photos />);
    wrapper.instance().toggleGalleryView();
    expect(wrapper.state().galleryView).toEqual(true);
  });
});