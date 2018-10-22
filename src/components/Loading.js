import React from 'react'
import styled from 'styled-components'

import loading from '../assets/images/loading.svg'

const Loading = props => (
  <LoadingWrapper>
    <LoadingSpinner src={loading} width="120" height="120" />
  </LoadingWrapper>
)

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`

const LoadingSpinner = styled.img`
  display: block;
`

export default Loading