import React from 'react';
import DisplayMode from '../src/DisplayMode';
import { shallow } from 'enzyme';

describe('Unit Test for <DisplayMode /> Component', () => {
  it('should render a div with class name "display-mode"', () => {
    const wrapper = shallow(<DisplayMode />);
    expect(wrapper.find('div').hasClass('display-mode')).toEqual(true);
  });

  it('should render a single div if galleryView prop is false', () => {
    const wrapper = shallow(<DisplayMode galleryView={false}/>);
    expect(wrapper.children().length).toEqual(0);
  });

  it('should render a Gallery component if galleryView prop is true', () => {
    const wrapper = shallow(<DisplayMode galleryView={true} />);
    expect(wrapper.children().length).toEqual(1);
  })
});
