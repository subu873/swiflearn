import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
`
const Header = styled.h4``

const NotFound = () => {
  return (
    <Container>
      <Header>Not sure what you are trying to search for...</Header>
    </Container>
  )
}

export default NotFound
