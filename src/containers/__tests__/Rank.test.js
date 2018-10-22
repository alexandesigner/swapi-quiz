import React from 'react';
import {shallow} from 'enzyme';
import Rank from '../Rank';

describe('Rank', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Rank />)
    expect(wrapper).toMatchSnapshot()
  });
})