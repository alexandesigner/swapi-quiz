/**
 * Quiz
 * Character: Character information
 * Answers: Field to answer
 * Score: User scored value
 * Countdown: A Countdown 2 minutes
 * User: Get user information name and email
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import Toolbar from '../components/Toolbar'
import Loading from '../components/Loading'
import ModalStart from '../components/ModalStart'
import ModalScore from '../components/ModalScore'
import ModalDetails from '../components/ModalDetails'
import CharactersList from '../components/CharactersList'

import { getCharacters } from '../redux/modules/characters/actions'
import { getSeconds } from '../redux/modules/countdown/actions'
import { getModalStart, getFinishedQuiz } from '../redux/modules/quiz/actions'
import { getModalScore } from '../redux/modules/score/actions'
import { resetUserInfo } from '../redux/modules/rank/actions'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.timer = 0
    this.state = {
      seconds: 8 // Set initial time
    }
  }
  componentDidMount() {
    // Get characters
    this.props.getCharacters()

    // Reset user info
    this.props.resetUserInfo()

    // Start modal quiz
    this.props.getModalStart(true)

    // Seconds to Time
    let seconds = this.secondsToTime(this.state.seconds)

    // Pass time seconds value
    this.props.getSeconds(seconds)

  }
  componentWillReceiveProps(nextProps){
    // Started quiz
    if(nextProps.started !== this.props.started){
      this.startQuiz()
    }
  }
  componentWillUnmount() {
    // End count
    this.endCountdown()
  }
  secondsToTime = (secs) => {

    // Calculate hours
    let hours = Math.floor(secs / (60 * 60))

    // Calculate minutes
    let divisorForMinutes = secs % (60 * 60)
    let minutes = Math.floor(divisorForMinutes / 60)

    // Calculate seconds
    let divisorForSeconds = divisorForMinutes % 60
    let seconds = Math.ceil(divisorForSeconds)

    // Time object
    let timeObject = {
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    }
    return timeObject
  }
  startQuiz = () => {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  }
  endCountdown = () => {
    clearInterval(this.timer)
  }
  countDown = () => {
    // Remove one second, set state so a re-render happens
    let seconds = this.state.seconds - 1
    this.props.getSeconds(this.secondsToTime(seconds))

    this.setState({
      seconds: seconds
    })
    // Check if we're at zero.
    if (seconds === 0) {
      this.props.getFinishedQuiz(true)
      this.props.getModalScore(true)
      this.endCountdown()
    }
  }
  render() {
    let { time, thumbnails, charactersList } = this.props
    return (
      <QuizContainer>
        <Toolbar
          countdown={time}
        />
        {charactersList.length > 0 ? <CharactersList
          thumbnails={thumbnails}
          charactersList={charactersList} 
        /> : <Loading /> }
        <ModalStart />
        <ModalScore 
          history={this.props.history} 
        />
        <ModalDetails />
      </QuizContainer>
    )
  }
}

const QuizContainer = styled.section`
  display: block;
`

const mapStateToProps = state => ({
  charactersList: state.characters.charactersList,
  time: state.countdown.time,
  started: state.quiz.started,
  finished: state.quiz.finished,
  thumbnails: state.characters.thumbnails
})

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(getCharacters()),
  getSeconds: (seconds) => dispatch(getSeconds(seconds)),
  getModalStart: (visible) => dispatch(getModalStart(visible)),
  getModalScore: (visible) => dispatch(getModalScore(visible)),
  getFinishedQuiz: (hasFinish) => dispatch(getFinishedQuiz(hasFinish)),
  resetUserInfo: () => dispatch(resetUserInfo())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz))