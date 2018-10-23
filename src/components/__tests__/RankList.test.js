import React from 'react';
import ReactDOM from 'react-dom';
import RankList from '../RankList';

describe('RankList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RankList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})