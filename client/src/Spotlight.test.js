import React from 'react';
import Spotlight from './Spotlight';
import { shallow } from 'enzyme';

describe('Unit Test for <Spotlight /> Component', () => {
  it('should render a div with class name "spotlight"', () => {
    const testPhoto = {photoId: 2, url: 'testUrl', caption: 'testCaption'};
    const wrapper = shallow(<Spotlight photo={testPhoto} />);
    expect(wrapper.find('div').first().hasClass('spotlight')).toEqual(true);
  });
});