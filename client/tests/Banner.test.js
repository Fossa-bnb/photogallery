import React from 'react';
import Banner from '../src/Banner';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Unit test for <Banner /> Component', () => {
  it('should render a banner with class name "banner"', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.find('div').hasClass('banner')).toEqual(true);
  });

  it('should render two image elements with photo urls', () => {
    const wrapper = shallow(<Banner photo1URL="http://lorempixel.com/400/600/animals/3/" photo2URL="http://lorempixel.com/400/600/nightlife/10/" />);
    expect(wrapper.props().children[0].props.src).toEqual('http://lorempixel.com/400/600/animals/3/');
    expect(wrapper.props().children[1].props.src).toEqual('http://lorempixel.com/400/600/nightlife/10/');
  });

  it('should render a "View Photos" Button', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.find('button').text()).toEqual('View Photos');
  });

  it('should invoke toggleGalleryView on banner click', () => {
    const toggleGalleryView = sinon.spy();
    const wrapper = shallow(<Banner toggleGalleryView={toggleGalleryView}/>);
    wrapper.find('.banner').simulate('click');
    expect(toggleGalleryView.calledOnce).toEqual(true);
  })
});