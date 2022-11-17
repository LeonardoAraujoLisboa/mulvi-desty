import React from 'react'
import { Card, CardImg, CardText } from 'reactstrap'
import {Container} from './styles'

interface ContentCardProps {
    icon: string;
    text: string;
    date: string;
}

interface Props {
    data: ContentCardProps[];
}

const ContentCard = ({data}: Props) => {
  return (
    <Container>
        {data.map((item, index) => (
            <Card key={index}>
                <CardImg top width='100%' alt='' src={item.icon} />
                <CardText>{item.text}</CardText>
                <CardText>{item.date}</CardText>
            </Card>
        ))}
    </Container>
  )
}

export default ContentCard