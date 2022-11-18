import React from 'react'
import { ListBusinessContentCard } from '../../../../utils'
import BusinessContentCard from '../../../BusinessContentCard'
import { Container, Icon } from './styles'
import MulviIcon from '../../../../assets/mulvi-icon.svg'
import MulviIconTable from '../../../../assets/tablet/mulvi-icon.svg'

const BusinessContent = () => {
  return (
    <Container id='contents'>
      <BusinessContentCard data={ListBusinessContentCard} />
      <Icon src={MulviIcon} className='mulvi-icon-desktop' />
      <Icon src={MulviIconTable} className='mulvi-icon-tablet' />
    </Container>
  )
}

export default BusinessContent