/**
 * BackButton
 */

 import React from 'react'
 import styled from 'styled-components'
 import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'

 const BackButton = props => (
  <Button to="/">
    <ArrowLeft />
    <ButtonText>Back</ButtonText>
  </Button>
 )

 const Button = styled(Link)`
  position: absolute;
  left: 0;
  padding: 0 25px;
  height: 80px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 22px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff320;
  }
`

const ButtonText = styled.span`
  margin-left: 10px;
`

export default BackButton