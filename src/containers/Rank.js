/**
 * Rank
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import Toolbar from '../components/Toolbar'
import RankList from '../components/RankList'

import { getCharacters } from '../redux/modules/characters/actions'

const rankStorageArray = JSON.parse(localStorage.getItem('rankList')) || []

class Rank extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rankList: rankStorageArray
    }
  }
  componentDidMount() {
    if(Object.keys(this.props.userInfo).length !== 0) {
      rankStorageArray.push(this.props.userInfo)
      localStorage.setItem('rankList', JSON.stringify(rankStorageArray))  
    }
    this.setState({
      rankList: rankStorageArray
    })
  }
  render() {
    return (
      <RankContainer>
        <Toolbar 
          history={this.props.history}
          hideCountdown 
          hideBackButton 
        />
        <Content>
          <ContentTitle>Overall scores</ContentTitle>
          <Description>See the wisest ones about Star Wars</Description>
          <RankList 
            rankList={this.state.rankList} 
          />
        </Content>
      </RankContainer>
    )
  }
}

const RankContainer = styled.section`
  display: block;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 80%;
  max-width: 680px;
  margin: 0 auto;
`

const ContentTitle = styled.h2`
  font-size: 42px;
  margin: 0;
  font-weight: bold;
  color: #fff320;
`

const Description = styled.p`
  font-size: 18px;
  color: #999;
`

const mapStateToProps = state => ({
  userInfo: state.rank.userInfo
})

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(getCharacters())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Rank))