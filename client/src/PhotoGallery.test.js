import React from 'react';
import PhotoGallery from './PhotoGallery';
import { shallow } from 'enzyme';

describe('Unit Test for <PhotoGallery /> Component', () => {
  it('should render a div with class "photo-gallery"', () => {
    const wrapper = shallow(<PhotoGallery />);
    expect(wrapper.find('div').hasClass('photo-gallery')).toEqual(true);
  });
  
  it('should initially render with an array of two empty photo objects', () => {
    const wrapper = shallow(<PhotoGallery />);
    expect(wrapper.state().photos.length).toEqual(2);
  });
  
  it('should have a toggleGalleryView function', () => {
    const wrapper = shallow(<PhotoGallery />);
    expect(wrapper.toggleGalleryView).toBeDefined();
  });
});