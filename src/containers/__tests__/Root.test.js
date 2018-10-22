import React from 'react';
import {shallow} from 'enzyme';
import Root from '../Root';

import configureStore from '../../redux/store';

describe('Root', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Root store={configureStore()} />)
    expect(wrapper).toMatchSnapshot()
  });
})