import React from 'react';
import HTTP from '../../api'
import {shallow} from 'enzyme';
import CharactersList from '../CharactersList';

describe('CharacterList', () => {
  it('async API call with Characters', async () => {
    const req = await HTTP.get(`/people`)
    const characters = req.data.results
    const wrapper = shallow(<CharactersList charactersList={characters} />)
    expect(wrapper).toMatchSnapshot()
  }, 30000)
})