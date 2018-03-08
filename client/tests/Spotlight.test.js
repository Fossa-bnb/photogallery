import React from 'react';
import Spotlight from '../src/Spotlight';
import { shallow } from 'enzyme';

describe('Unit Test for <Spotlight /> Component', () => {
  it('should render a div with class name "spotlight"', () => {
    const testPhoto = {photoId: 2, url: 'testUrl', caption: 'testCaption'};
    const wrapper = shallow(<Spotlight photo={testPhoto} />);
    expect(wrapper.find('div').first().hasClass('spotlight')).toEqual(true);
  });

  it('should receive a numPhotos prop', () => {
    const component = (<Spotlight numPhotos={13} />);
    expect(component.props.numPhotos).toEqual(13);
  });
  
  it('should invoke shiftSlide on user click of spotlight image', () => {
    const testPhoto = {photoId: 2, url: 'testUrl', caption: 'testCaption'};
    const shiftSlide = jest.fn();
    const wrapper = shallow(<Spotlight photo={testPhoto} shiftSlide={shiftSlide} />); 
    wrapper.find('.spotlightImg').simulate('click');
    expect(shiftSlide.mock.calls.length).toEqual(1);
  });

  it('should invoke toggleThumbnailsOn on user hover over "show photos list"', () => {
    const testPhoto = {photoId: 2, url: 'testUrl', caption: 'testCaption'};
    const toggleThumbnailsOn = jest.fn();
    const wrapper = shallow(<Spotlight photo={testPhoto} toggleThumbnailsOn={toggleThumbnailsOn} />); 
    wrapper.find('.toggleThumbnails').simulate('mouseEnter');
    expect(toggleThumbnailsOn.mock.calls.length).toEqual(1);
  });

  it('should invoke toggleThumbnailsOff on user click on "hide photos list"', () => {
    const testPhoto = {photoId: 2, url: 'testUrl', caption: 'testCaption'};
    const toggleThumbnailsOff = jest.fn();
    const wrapper = shallow(<Spotlight photo={testPhoto} toggleThumbnailsOff={toggleThumbnailsOff} />); 
    wrapper.find('.shownThumbnails').simulate('click');
    expect(toggleThumbnailsOff.mock.calls.length).toEqual(1);
  });
});
