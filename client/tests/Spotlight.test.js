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
});
