/**
 * Rank Item
 */

import React from 'react'
import styled from 'styled-components'

const RankItem = (props) => (
  <ItemWrapper>
    <UserInfo>
      <UserName>{props.item.name}</UserName>
      <UserEmail>{props.item.email}</UserEmail>
    </UserInfo>
    <UserScore>
      {props.item.score}
    </UserScore>
  </ItemWrapper>
)

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  padding: 15px 25px;
  background: rgba(0,0,0,.08);
  position: relative;
  margin: 1px auto;
`

const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const UserName = styled.strong`
  font-size: 22px;
  font-weight: bold;
`

const UserEmail = styled.span`
  font-size: 16px;
  color: #999;
`

const UserScore = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: #fff320;
`

export default RankItem