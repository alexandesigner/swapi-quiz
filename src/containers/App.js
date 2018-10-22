import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import leadBG from '../assets/images/bg.jpg'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppLead>
          <Logo src={logo} alt="Star Wars Logo" />
          <Label>Explore world of Star Wars</Label>
          <Button className="App-lead_button" to="/quiz">Play!</Button>
        </AppLead>
      </AppWrapper>
    )
  }
}

const AppWrapper = styled.div`
  text-align: center;
  background: url(${leadBG});
  background-size: cover;
  background-repeat: no-repeat;
`

const AppLead = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  width: 280px;
`

const Label = styled.strong`
  color: #fff320;
  font-size: 20px;
  margin: 20px 0;
`

const Button = styled(Link)`
  padding: 20px 40px;
  background: #fff320;
  border-radius: 2px;
  font-size: 26px;
  margin: 15px 0;
  text-decoration: none;
  color: #323232;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1,1.1);
  }
  &:active, &:focus {
    transform: scale(1, 1);
  }
`

export default App