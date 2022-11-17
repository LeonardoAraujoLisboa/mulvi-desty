import React from 'react'
import {Container, Button} from './styles'

const MulviButton = ({...rest}) => {
  return (
    <Container className='btn-mulvi' {...rest}>
      <Button to={'/'}>Quero ser mulvi</Button>
    </Container>
  )
}

export default MulviButton