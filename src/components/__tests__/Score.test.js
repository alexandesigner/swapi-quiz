import React from 'react';
import ReactDOM from 'react-dom';
import Score from '../Score';

describe('Score', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Score />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})