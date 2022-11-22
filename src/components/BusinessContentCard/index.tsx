import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { Container, Title, ContentCard } from './styles';

interface Props {
    data: {
        icon: string;
        info_icon: string;
        title: string;
        text: string;
        link: string;
    }[]
}

const BusinessContentCard = ({data}: Props) => {

    const handleClick = (link: string) => {
        window.location.href = `/${link}`
    }

  return (
    <Container>
      <Title className='attention-strong'>Conteúdos para seu negócio</Title>
      <ContentCard>
            {data.map((item, index) => (
                <Card key={index} tag={'button'} onClick={() => handleClick(item.link)}>
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