import React from 'react';
import PhotoGallery from './PhotoGallery';
import { shallow } from 'enzyme';

describe('Unit Test for <PhotoGallery /> Component', () => {
  it('should render a div with class "photo-gallery"', () => {
    const wrapper = shallow(<PhotoGallery />);
    expect(wrapper.find('div').hasClass('photo-gallery')).toEqual(true);
  });
  
  it('should initially render with an empty array of photos', () => {
    const wrapper = shallow(<PhotoGallery />);
    expect(wrapper.state().photos.length).toEqual(0);
  });

});