import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { Container } from './styles';

interface Props {
    data: {
        icon: string;
        info_icon: string;
        title: string;
        text: string;
    }[]
}

const BusinessContentCard = ({data}: Props) => {

    const handleClick = () => {
        window.location.href = '/contents'
    }

  return (
    <Container>
        {data.map((item, index) => (
            <Card key={index} tag={'button'} onClick={handleClick}>
                <img alt={item.info_icon} src={item.icon} width='100%' />
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{item.text}</CardText>
                </CardBody>
            </Card>
        ))}
    </Container>
  )
}

export default BusinessContentCard