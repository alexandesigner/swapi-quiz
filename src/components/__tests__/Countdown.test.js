import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from '../Countdown';

describe('Countdown', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Countdown />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})