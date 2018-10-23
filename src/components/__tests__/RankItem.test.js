import React from 'react';
import ReactDOM from 'react-dom';
import RankItem from '../RankItem';

describe('RankItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RankItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})