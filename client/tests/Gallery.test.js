import React from 'react';
import Gallery from '../src/Gallery';
import { shallow } from 'enzyme';

describe ('Unit test for <Gallery /> Component', () => {
  it('should render a div with class name "gallery"', () => {
    const testPhotos = [{photoId: 2, url: 'testUrl', caption: 'testCaption'}, {photoId: 3, url: 'testUrl2', caption: 'testCaption2'}];
    const wrapper = shallow(<Gallery photos={testPhotos} />);
    expect(wrapper.find('div').first().hasClass('gallery')).toEqual(true);
  });
});

// Component Contract Definition for Testing
// What it renders
// Props component receives
// State component holds (if any)
// Component response to user interaction

// Others:
// Context the component is rendered in
// What component does when you call methods on its instance
// Side effects that occur as part of the component lifecicyle