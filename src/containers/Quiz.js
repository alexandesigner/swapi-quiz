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
import { getModalScore, getCurrentScore, resetScore } from '../redux/modules/score/actions'
import { resetUserInfo } from '../redux/modules/rank/actions'
import { getSpecies } from '../redux/modules/species/actions'
import { getPlanets } from '../redux/modules/planets/actions'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.timer = 0
    this.state = {
      seconds: 120 // Set initial time
    }
  }
  componentDidMount() {

    if (this.props.charactersList.length <= 0) {
      // Get characters
      this.props.getCharacters()
    }

    if (this.props.planetsList.length <= 0) {
      // Get planets
      this.props.getPlanets()
    }

    if (this.props.speciesList.length <= 0) {
      // Get species
      this.props.getSpecies()
    }

    // Stated modal
    this.props.getModalStart(true)

    // Reset points
    this.props.resetScore()

    // Reset user info
    this.props.resetUserInfo()

    // Seconds to Time
    let seconds = this.secondsToTime(this.state.seconds)

    // Pass time seconds value
    this.props.getSeconds(seconds)

  }
  componentWillReceiveProps(nextProps){
    // Started quiz
    if (nextProps.started !== this.props.started) {
      this.startQuiz()
    }
    // Current Score
    if (nextProps.maxScore !== this.props.maxScore || nextProps.minScore !== this.props.minScore) {
      this.props.getCurrentScore(nextProps.maxScore + nextProps.minScore)
    }
  }
  componentWillUnmount() {
    // End quiz
    this.endQuiz()
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
  endQuiz = () => {
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
      this.endQuiz()
    }
  }
  render() {
    let { time, charactersList, currentScore } = this.props
    return (
      <QuizContainer>
        <Toolbar
          currentScore={currentScore}
          countdown={time}
        />
        {charactersList.length > 0 ? <CharactersList /> : <Loading /> }
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
  padding-top: 80px;
`

const mapStateToProps = state => ({
  charactersList: state.characters.charactersList,
  time: state.countdown.time,
  started: state.quiz.started,
  finished: state.quiz.finished,
  currentScore: state.score.currentScore,
  maxScore: state.score.maxScore,
  minScore: state.score.minScore,
  speciesList: state.species.speciesList,
  planetsList: state.planets.planetsList
})

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(getCharacters()),
  getSpecies: () => dispatch(getSpecies()),
  getPlanets: () => dispatch(getPlanets()),
  getSeconds: (seconds) => dispatch(getSeconds(seconds)),
  getModalStart: (visible) => dispatch(getModalStart(visible)),
  getModalScore: (visible) => dispatch(getModalScore(visible)),
  getFinishedQuiz: (hasFinish) => dispatch(getFinishedQuiz(hasFinish)),
  resetUserInfo: () => dispatch(resetUserInfo()),
  getCurrentScore: (score) => dispatch(getCurrentScore(score)),
  resetScore: () => dispatch(resetScore())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz))