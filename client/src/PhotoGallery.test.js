import React from 'react';
import PhotoGallery from './PhotoGallery';
import { shallow } from 'enzyme';

describe('Test for <PhotoGallery /> Component', () => {
  it('should render a div with class "photo-gallery"', () => {
    const wrapper = shallow(<PhotoGallery />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.is('div')).toEqual(true);
  });
});