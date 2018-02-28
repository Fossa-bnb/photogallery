import React from 'react';
import Gallery from './Gallery';
import { shallow } from 'enzyme';

describe ('Unit test for <Gallery /> Component', () => {
  it('should render a div with class name "gallery"', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.find('div').hasClass('gallery')).toEqual(true);
  });
});