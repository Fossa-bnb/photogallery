import React from 'react';
import DisplayMode from '../src/DisplayMode';
import { shallow } from 'enzyme';

describe('Unit Test for <DisplayMode /> Component', () => {
  it('should render a div with class name "display-mode"', () => {
    const wrapper = shallow(<DisplayMode />);
    expect(wrapper.find('div').hasClass('display-mode')).toEqual(true);
  });
});