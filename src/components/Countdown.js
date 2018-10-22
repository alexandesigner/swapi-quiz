/**
 * Countdown
*/
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Clock } from 'react-feather'

const renderTime = (time) => {
  if(time === 0 || time === undefined) { 
    return '00'
  } else if (time <= 9 && time > 0) {
    return `0${time}`
  } else {
    return time
  }
}

const Countdown = props => (
  <CountdownWrapper>
    <Clock size={42} />
    <CountdownValue>
      {props.countdown.hours > 0 && <span>{renderTime(props.countdown.hours)}:</span>}
      <span>{renderTime(props.countdown.minutes)}:</span>
      <span>{renderTime(props.countdown.seconds)}</span>
    </CountdownValue>
  </CountdownWrapper>
)

Countdown.propTypes = {
  countdown: PropTypes.object
}

const CountdownWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 80px;
  display: flex;
  padding: 0 25px;
  align-items: center;
  background: yellow;
  color: #212121;
`

const CountdownValue = styled.strong`
  font-size: 26px;
  margin-left: 10px;
`

export default Countdown