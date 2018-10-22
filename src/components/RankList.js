/**
 * RankList
*/

import React from 'react'
import styled from 'styled-components'

import RankItem from './RankItem'

const RankList = props => (
  <RankListWrapper>
    {props.rankList.length > 0 ? props.rankList.map((item, index) => (
      <RankItem 
        key={index} 
        item={item}
      />
    )) : <NotFound>Nobody has played it yet, be the first!</NotFound>}
  </RankListWrapper>
)

const RankListWrapper = styled.section`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  padding: 30px;
`

const NotFound = styled.span`
  font-size: 22px;
  color: #999;

`

export default RankList