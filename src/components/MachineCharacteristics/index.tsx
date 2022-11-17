import React from 'react'
import {Container, Title, List, ListItem} from './styles'

interface ListProps {
    text: string;
}

interface Props {
    title: string;
    list: ListProps[];
}

const MachineCharacteristics = ({title, list}: Props) => {
  return (
    <Container className='machine-characteristics'>
        <Title>{title}</Title>
        <List>
            {list.map((item, index) => (
                <ListItem key={index}>{item.text}</ListItem>
            ))}
        </List>
    </Container>
  )
}

export default MachineCharacteristics