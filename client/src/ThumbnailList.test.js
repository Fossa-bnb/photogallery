import React from 'react';
import ThumbnailList from './ThumbnailList';
import { shallow } from 'enzyme';

describe('Unit Test for <ThumbnailList /> component', () => {
  it('should render a div with class name "thumbnail-list"', () => {
    const testPhotos = [{photoId: 2, url: 'testUrl', caption: 'testCaption'}, {photoId: 3, url: 'testUrl2', caption: 'testCaption2'}];
    const wrapper = shallow(<ThumbnailList photos={testPhotos} />);
    expect(wrapper.find('div').hasClass('thumbnail-list')).toEqual(true);
  });

  it('should receive a photos array prop', () => {
    const testPhotos = [{photoId: 2, url: 'testUrl', caption: 'testCaption'}, {photoId: 3, url: 'testUrl2', caption: 'testCaption2'}];
    const component = (<ThumbnailList photos={testPhotos} />);
    expect(Array.isArray(component.props.photos)).toEqual(true);
  });
});