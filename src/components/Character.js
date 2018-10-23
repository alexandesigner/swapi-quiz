/**
 * Character
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { HelpCircle } from 'react-feather'

import { 
  getModalDetails, 
  setCurrentDetails, 
  setCurrentIndex 
} from '../redux/modules/characters/actions'

import { getMaxScore, getCurrentScore } from '../redux/modules/score/actions'

class Character extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  renderThumbnails = (index) => {
    return `${window.location.origin}/${this.props.thumbnails[index].url}`
  }
  openDetails = (index) => {
    this.props.setCurrentDetails(this.props.character)
    this.props.setCurrentIndex(index)
    this.props.getModalDetails(true)
    this.inputRef.current.setAttribute("data-use-help", true)
  }
  answerName = () => {
    // Get field target
    let target = this.inputRef.current
    let nameId = target.getAttribute("data-name-id")
    let fieldName = target.value
    let currentCharacter = this.props.thumbnails[nameId]
    let useHelp = target.getAttribute("data-use-help")
    
    // check if name has exist
    if(currentCharacter.label === fieldName) {
      // add points to current score
      if (!useHelp) {
        this.props.getMinScore(1) // 5 points
      } else {
        this.props.getMaxScore(1) // 10 points
      }
      // disable input on hit
      target.disabled = true
    }
  }
  render() {
    return (
      <CharacterWrapper>
        <Card>
          <Thumbnail 
            src={this.renderThumbnails(this.props.index)}
            width="120"
            height="120" 
          />
          <CardFooter>
            <Field 
              ref={this.inputRef}
              onChange={this.answerName}
              data-name-id={this.props.index}
              data-use-help={false} 
              name="answer-name" 
              placeholder="What name the character?" 
              type="text" 
            />
            <span>{this.props.character.name}</span>
            <Button onClick={() => this.openDetails(this.props.index)}>
              <HelpCircle size={32} />
            </Button>
          </CardFooter>
        </Card>
      </CharacterWrapper>
    )
  }
}

const CharacterWrapper = styled.div`
  flex-basis: 33.333%;
  width: 33.333%;
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-bottom: 1rem;
`

const Card = styled.article`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,.08);
  padding: 30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(0,0,0,0);
    box-shadow: 0 0 0 2px rgba(0,0,0,0.2);
  }
`

const CardFooter = styled.footer`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`

const Field = styled.input`
  background: transparent;
  border: 0;
  width: 80%;
  height: 52px;
  box-shadow: 0 2px 0 0 #000;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  &:hover, &:focus, &:active {
    box-shadow: 0 2px 0 0 #fff320;
  }
  &:disabled {
    opacity: 0.4;
    color: #fff320;
    &:hover, &:focus, &:active {
      box-shadow: 0 2px 0 0 #000;
    }
  }
`

const Thumbnail = styled.img`
  display: block;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #fff320;
  margin-bottom: 10px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 0 none;
  transition: all 0.2s ease-in-out;
  margin-top: 30px;
  background: transparent;
  color: #fff320;
  cursor: pointer;
  &:hover {
    transform: scale(1.1,1.1);
  }
`

const mapStateToProps = state => ({
  modalStart: state.quiz.modalStart,
  charactersList: state.characters.charactersList,
  thumbnails: state.characters.thumbnails,
  currentScore: state.score.currentScore,
  maxScore: state.score.maxScore,
  minScore: state.score.minScore
})

const mapDispatchToProps = dispatch => ({
  getModalDetails: (visible) => dispatch(getModalDetails(visible)),
  setCurrentDetails: (character) => dispatch(setCurrentDetails(character)),
  setCurrentIndex: (currentIndex) => dispatch(setCurrentIndex(currentIndex)),
  getMaxScore: (score) => dispatch(getMaxScore(score)),
  getCurrentScore: (score) => dispatch(getCurrentScore(score))
})

export default connect(mapStateToProps, mapDispatchToProps)(Character)