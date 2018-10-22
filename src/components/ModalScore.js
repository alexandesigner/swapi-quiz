import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import styled from 'styled-components'
import { X } from 'react-feather'
import uuidv4 from 'uuid/v4'

import Score from '../components/Score'

import { getModalScore } from '../redux/modules/score/actions'
import { saveUserInfo, resetUserInfo } from '../redux/modules/rank/actions'

Modal.setAppElement('#root')

class ModalScore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      score: ''
    }
  }
  changeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  changeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  submitScore = () => {
    const userData = {
      id: uuidv4(),
      name: this.state.name,
      email: this.state.email,
      score: this.props.currentScore
    }
    this.props.saveUserInfo(userData)
    this.props.getModalScore(false)
    this.props.history.push('/rank')
  }
  render() {
    return (
      <Modal 
        isOpen={this.props.modalScore}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.75)'
          },
          content: {
            left: '50%',
            right: '50%',
            transform: 'translateX(-50%)',
            width: '480px',
            height: '547px'
          }
        }}
      >
        <Header>
          <Title>Quiz finalizado!</Title>
          <CloseButton onClick={() => {
            this.props.history.push('/')
            this.props.getModalScore(false)
            this.props.resetUserInfo()
          }}>
            <X />
          </CloseButton>
        </Header>
        <Content>
          <Score score={this.props.currentScore} />
          <Label>Preencha o form abaixo para salvar sua pontuação:</Label>
          <Form onSubmit={() => this.submitScore()}>
            <LabelField htmlFor="name">Nome</LabelField>
            <Field placeholder="Qual o seu nome?" onChange={this.changeName} id="name" name="name" type="text" required />
            <LabelField htmlFor="email">Email</LabelField>
            <Field placeholder="Qual seu email?" onChange={this.changeEmail} id="email" name="email" type="text" required />
            <SubmitButton type="submit">Salvar</SubmitButton>
          </Form>
        </Content>
      </Modal>
    )
  }
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`

const Label = styled.p`
  font-size: 18px;
  color: #999;
  margin: 10px 0;
  text-align: left;
  & strong {
    color: #323232;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`

const LabelField = styled.label`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`

const Field = styled.input`
  font-size: 18px;
  height: 36px;
  color: #999;
  box-shadow: 0 2px 0 0 #d1d1d1;
  transition: all 0.2s ease-in-out;
  border: 0 none;
  margin-bottom: 15px;
  &:hover, &:focus, &:active {
    box-shadow: 0 2px 0 0 #fff320;
  }
  &:active, &:focus {
    color: #323232;
  }
`

const Title = styled.h2`
  font-size: 32px;
  line-height: 36px;
`

const SubmitButton = styled.button`
  padding: 20px 40px;
  background: #fff320;
  border-radius: 2px;
  font-size: 26px;
  border: 0 none;
  margin: 15px 0;
  text-decoration: none;
  color: #323232;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1,1.1);
  }
  &:active, &:focus {
    transform: scale(1, 1);
  }
`

const CloseButton = styled.button`
  font-size: 20px;
  color: #999;
  background: transparent;
  border: 0 none;
  cursor: pointer;
`

const mapStateToProps = state => ({
  modalScore: state.score.modalScore,
  finished: state.quiz.finished,
  currentScore: state.score.currentScore,
  rankList: state.rank.rankList
})

const mapDispatchToProps = dispatch => ({
  getModalScore: (visible) => dispatch(getModalScore(visible)),
  saveUserInfo: (rank) => dispatch(saveUserInfo(rank)),
  resetUserInfo: () => dispatch(resetUserInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalScore)