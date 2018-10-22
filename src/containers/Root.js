/**
 * Root
*/

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import { GlobalStyle } from '../styles/globalStyles'

import App from './App'
import Quiz from './Quiz'
import Rank from './Rank'

const Root = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <main>
        <GlobalStyle />
        <Route exact path="/" component={App} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/rank" component={Rank} />
      </main>
    </Switch>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root