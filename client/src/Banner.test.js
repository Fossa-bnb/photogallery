import React from 'react';
import Banner from './Banner';
import { shallow } from 'enzyme';

describe('Unit test for <Banner /> Component', () => {
  it('should render a banner with classname "banner"', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.find('div').hasClass('banner')).toEqual(true);
  });

  it('should have two photos in its props', () => {
    const wrapper = shallow(<Banner photo1URL="http://lorempixel.com/400/600/animals/3/" photo2URL="http://lorempixel.com/400/600/nightlife/10/" />);
    expect(wrapper.prop('photo1')).toEqual('http://lorempixel.com/400/600/animals/3/');
    expect(wrapper.prop('photo2')).toEqual('http://lorempixel.com/400/600/nightlife/10/');
  });

});