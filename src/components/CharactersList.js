/**
 * CharactersList
*/

import React from 'react'
import styled from 'styled-components'

import Character from './Character'

const CharactersList = props => (
  <CharacterListWrapper>
    {props.charactersList.length > 0 && props.charactersList.map((item, index) => (
      <Character 
        key={index} 
        character={item} 
        thumbnails={props.thumbnails} 
        index={index} 
      />
    ))}
  </CharacterListWrapper>
)

const CharacterListWrapper = styled.section`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  padding: 30px;
`

export default CharactersList