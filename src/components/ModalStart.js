/**
 * Modal Start
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import styled from 'styled-components'

import { getModalStart, getStartedQuiz } from '../redux/modules/quiz/actions'

Modal.setAppElement('#root')

class ModalStart extends Component {
  startedQuiz = () => {
    this.props.getStartedQuiz(true)
    this.props.getModalStart(false)
  }
  render() {
    return (
      <Modal 
        isOpen={this.props.modalStart}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.65)'
          },
          content: {
            left: '50%',
            right: '50%',
            transform: 'translateX(-50%)',
            width: '480px',
            height: '400px'
          }
        }}
      >
        <Header>
          <Title>How to play?</Title>
        </Header>
        <Content>
          <Description>Let's test your knowledge in Star Wars</Description>
          <Description>You have <strong>2 minutes</strong> for the largest number of <strong>names of the characters</strong>, each <strong>hit you get 10 points</strong>, if you <strong>hit using the tip earn 5 points.</strong></Description>
          {this.props.characterList.length > 0 ? <StartButton onClick={() => this.startedQuiz()}>Let's play now!</StartButton> : <BoxWrapper><StartButton disabled>Let's play now!</StartButton><span>Wait a moment...</span></BoxWrapper>}
        </Content>
      </Modal>
    )
  }
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
`

const Title = styled.h2`
  font-size: 32px;
  line-height: 36px;
  text-align: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & span {
    color: #999;
    font-size: 12px;
  }
`

const Description = styled.p`
  font-size: 18px;
  color: #999;
  margin: 10px 0;
  text-align: center;
  & strong {
    color: #323232;
    font-size: 22px;
  }
`

const StartButton = styled.button`
  padding: 20px 40px;
  background: #fff320;
  border-radius: 2px;
  font-size: 26px;
  margin: 15px 0;
  text-decoration: none;
  border: 0 none;
  cursor: pointer;
  color: #323232;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1,1.1);
  }
  &:active, &:focus {
    transform: scale(1, 1);
  }
  &:disabled {
    opacity: 0.6;
    background: #f1f1f1;
    cursor: default;
    &:hover, &:active, &:focus {
      transform: scale(1, 1);
    }
  }
`

const mapStateToProps = state => ({
  modalStart: state.quiz.modalStart,
  characterList: state.characters.charactersList
})

const mapDispatchToProps = dispatch => ({
  getModalStart: (visible) => dispatch(getModalStart(visible)),
  getStartedQuiz: (hasStart) => dispatch(getStartedQuiz(hasStart))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalStart)