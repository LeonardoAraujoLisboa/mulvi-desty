import React from 'react'
import {Card, CardImg, CardText} from 'reactstrap'
import './styles.scss'

interface Props {
  icon: string,
  text: string
}

const BenefitCard = ({icon, text}: Props) => {
  return (
    <Card className='benefit-card'>
      <CardImg top width='100%' alt='bandeiras' src={icon} />
      <CardText>{text}</CardText>
    </Card>
  )
}

export default BenefitCard