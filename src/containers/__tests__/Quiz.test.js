import React from 'react';
import {shallow} from 'enzyme';
import Quiz from '../Quiz';

describe('Quiz', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Quiz />)
    expect(wrapper).toMatchSnapshot()
  });
})