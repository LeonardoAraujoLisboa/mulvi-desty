import React, {useEffect, useState} from 'react'
import { Card, CardImg, CardText } from 'reactstrap'
import { BusinessCardProps } from '../../utils/interfaces';
import {Container} from './styles'

interface DataFormatted {
    icon: string;
    info_icon: string;
    title: string;
    text: string;
    id: string;
    date?: string;
}

const ContentCard = ({data, pageId}: BusinessCardProps) => {

    const [dataFormatted, setDataFormatted] = useState<DataFormatted[]>([])
    
    const formattedData = () => {
        const newContents = data.filter((item) => {
            return item.id !== pageId
        })
        
        setDataFormatted(newContents)
    }

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

    useEffect(() => {
        formattedData()
    }, [])

  return (
    <Container>
        {dataFormatted.map((item, index) => (
            <Card key={index} tag={'button'} onClick={() => handleClick(item.id)}>
                <CardImg top alt='' src={item.icon} />
                <CardText className='title'>{item.title}</CardText>
                <CardText className='date'>{item.date}</CardText>
            </Card>
        ))}
    </Container>
  )
}

export default ContentCard