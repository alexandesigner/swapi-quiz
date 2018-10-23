/**
 * CharactersList
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Character from './Character'

class CharactersList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      charactersLimit: 9,
      maxCount: 90
    }
  }
  loadMore = () => {
    this.setState({
      charactersLimit: this.state.charactersLimit + 9
    })
  }
  render() {
    const { charactersLimit, maxCount } = this.state
    return (
      <CharacterListWrapper>
        <Characters>  
          {this.props.charactersList.length > 0 && this.props.charactersList.slice(0, this.state.charactersLimit).map((character, index) => (
            <Character 
              key={index} 
              character={character} 
              thumbnails={this.props.thumbnails} 
              index={index} 
            />
          ))}
        </Characters>
        {charactersLimit}
        {maxCount}
        {charactersLimit !== maxCount && 
          <LoadMoreButton onClick={() => this.loadMore()}>Load more</LoadMoreButton>
        }
      </CharacterListWrapper>
    )
  }
}

const CharacterListWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const Characters = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  padding: 30px;
`

const LoadMoreButton = styled.button`
  padding: 20px 40px;
  background: #fff320;
  border-radius: 2px;
  max-width: 300px;
  font-size: 26px;
  margin: 0 auto 40px auto;
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
  charactersList: state.characters.charactersList,
  thumbnails: state.characters.thumbnails
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)