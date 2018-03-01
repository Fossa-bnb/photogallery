import React from 'react';
import Thumbnail from './Thumbnail';
import { shallow } from 'enzyme';

describe('Unit Test for <Thumbnail /> Component', () => {
  it('should render a div with class name "thumbnail"', () => {
    const testPhoto = {photoId: 2, url: 'testUrl', caption: 'testCaption'};
    const wrapper = shallow(<Thumbnail photo={testPhoto}/>);
    expect(wrapper.find('div').hasClass('thumbnail')).toEqual(true);
  });
});