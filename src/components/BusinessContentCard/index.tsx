import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { BusinessCardProps } from '../../utils/interfaces';
import { Container, Title, ContentCard } from './styles';

const BusinessContentCard = ({data}: BusinessCardProps) => {

    const handleClick = (id: string) => {
        if (id === '1') {
            window.location.href = `/contents/${id}/medium-ticket`
        } else if (id === '2') {
            window.location.href = `/contents/${id}/main-mistakes`
        } else if (id === '3') {
            window.location.href = `/contents/${id}/working-capital`
        } else {
            window.location.href = `/contents/${id}/antecipation`
        }
    }

  return (
    <Container>
      <Title className='attention-strong'>Conteúdos para seu negócio</Title>
      <ContentCard>
            {data.map((item, index) => (
                <Card key={index} tag={'button'} onClick={() => handleClick(item.id)}>
                    <img alt={item.info_icon} src={item.icon} width='100%' />
                    <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                        <CardText>{item.text}</CardText>
                    </CardBody>
                </Card>
            ))}
        </ContentCard>
    </Container>
  )
}

export default BusinessContentCard