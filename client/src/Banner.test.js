import React from 'react';
import Banner from './Banner';
import { shallow } from 'enzyme';

describe('Unit test for <Banner /> Component', () => {
  it('should render a banner with classname "banner"', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.find('div').hasClass('banner')).toEqual(true);
  });

  it('should have two photos in its props', () => {
    const wrapper = shallow(<Banner photo1="firstPhoto" photo2="secondPhoto"/>);
    expect(wrapper.prop('photo1')).toEqual('firstPhoto');
    expect(wrapper.prop('photo2')).toEqual('secondPhoto');
  });

});