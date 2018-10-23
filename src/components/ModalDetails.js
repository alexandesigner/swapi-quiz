import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import styled from 'styled-components'
import { X } from 'react-feather'

import { getModalDetails } from '../redux/modules/characters/actions'

Modal.setAppElement('#root')

class ModalDetails extends Component {
  renderThumb = (index) => {
    return `${window.location.origin}/${this.props.thumbnails[index].url}`
  }
  renderPlanets = (homeworld) => {
    if (homeworld !== undefined) {
      if (homeworld.length > 0) {
        const planetId = homeworld.match(/\d+/g).map(Number)
        return this.props.planetsList[planetId].name
      } else {
        return 'n/a'
      }
    }
  }
  renderSpecie = (specie) => {
    if (specie !== undefined) {
      if (specie.length > 0) {
        const specieId = specie[0].match(/\d+/g).map(Number)
        return this.props.speciesList[specieId].name
      } else {
        return 'n/a'
      }
    }
  }
  render() {
    return (
      <Modal 
        isOpen={this.props.modalDetails}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.75)'
          },
          content: {
            left: '50%',
            right: '50%',
            transform: 'translateX(-50%)',
            width: '480px'
          }
        }}
      >
        <Header>
          <Title>Details</Title>
          <CloseButton onClick={() => this.props.getModalDetails(false)}>
            <X />
          </CloseButton>
        </Header>
        <Content>
          <Thumbnail 
            src={this.renderThumb(this.props.currentIndex)}
            width="100%"
          />
          <Label><strong>Specie: </strong> {this.renderSpecie(this.props.currentDetails.species)}</Label>
          <Label><strong>Planet: </strong> {this.renderPlanets(this.props.currentDetails.homeworld)}</Label>
          <Label><strong>Height: </strong> {this.props.currentDetails.height}</Label>
          <Label><strong>Hair: </strong> {this.props.currentDetails.hair_color}</Label>
          <div></div>
        </Content>
      </Modal>
    )
  }
}

const Thumbnail = styled.img`
  border-radius: 3px;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
`

const Title = styled.h2`
  font-size: 32px;
  line-height: 36px;
`

const Content = styled.div`
  display: block;
  width: 100%;
`

const Label = styled.p`
  font-size: 18px;
  color: #999;
  & strong {
    color: #323232;
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
  modalDetails: state.characters.modalDetails,
  thumbnails: state.characters.thumbnails,
  currentDetails: state.characters.currentDetails,
  currentIndex: state.characters.currentIndex,
  planetsList: state.planets.planetsList,
  speciesList: state.species.speciesList
})

const mapDispatchToProps = dispatch => ({
  getModalDetails: (visible) => dispatch(getModalDetails(visible))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalDetails)