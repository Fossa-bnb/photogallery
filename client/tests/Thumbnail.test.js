import React from 'react';
import Thumbnail from '../src/Thumbnail';
import { shallow } from 'enzyme';

describe('Unit Test for <Thumbnail /> Component', () => {
  it('should render a div with class name "thumbnail"', () => {
    const testPhoto = {photoId: 2, url: 'testUrl', caption: 'testCaption'};
    const wrapper = shallow(<Thumbnail photo={testPhoto}/>);
    expect(wrapper.find('div').hasClass('thumbnail')).toEqual(true);
  });

  it('should receive a url prop with correct url path', () => {
    const wrapper = shallow(<Thumbnail url={'testUrl'} />);
    expect(wrapper.props().children.props.src).toEqual('testUrl');
  });

  it('should receive a photoId prop with correct id', () => {
    const component = (<Thumbnail photoId={15} />);
    expect(component.props.photoId).toEqual(15);
  });

  it('should call makeCurrentSlide on click of thumbnail', () => {
    const makeCurrentSlide = jest.fn();
    const wrapper = shallow(<Thumbnail makeCurrentSlide={makeCurrentSlide} />);
    wrapper.find('.thumbnail-img').simulate('click');
    expect(makeCurrentSlide.mock.calls.length).toEqual(1);
  });

});
