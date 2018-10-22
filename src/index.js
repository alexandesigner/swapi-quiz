import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import * as serviceWorker from './utils/serviceWorker';

import configureStore from './redux/store';

// Import injected global styled-components
import './styles/globalStyles'

ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
