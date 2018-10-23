/**
 * Toolbar
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Countdown from './Countdown'
import BackButton from './BackButton'

import logo from '../assets/images/logo-wide.png'

const Toolbar = props => (
  <ToolbarWrapper>
    {!props.hideBackButton && <BackButton
      {...props} 
    />}
    <Logo 
      src={logo} 
      alt="Star Wars Logo" 
      height="28" 
    />
    <span>{props.currentScore}</span>
    {!props.hideCountdown ? <Countdown 
      countdown={props.countdown} 
    /> : <PlayAgainButton onClick={() => props.history.push('/quiz')}>Play Again!</PlayAgainButton>}
  </ToolbarWrapper>
)

const ToolbarWrapper = styled.header`
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
`

const Logo = styled.img`
  display: block;
`

const PlayAgainButton = styled.div`
  position: absolute;
  right: 0;
  height: 80px;
  display: flex;
  padding: 0 25px;
  align-items: center;
  background: yellow;
  color: #212121;
  font-size: 26px;
  cursor: pointer;
`

Toolbar.propTypes = {
  countdown: PropTypes.object,
  hideCountdown: PropTypes.bool,
  hideBackButton: PropTypes.bool
}

export default Toolbar