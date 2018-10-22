/**
 * Score
*/

import React from 'react'
import styled from 'styled-components'

const Score = props => (
  <ScoreWrapper>
    <ScoreValue>10</ScoreValue>
    <ScoreText>seus pontos</ScoreText>
  </ScoreWrapper>
)

const ScoreWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  padding: 22px 0;
`

const ScoreValue = styled.strong`
  font-size: 62px;
  font-weight: bold;
  margin-right: 15px;
`

const ScoreText = styled.strong`
  font-size: 22px;
  color: #999;
`

export default Score