import React from 'react'
import { Container, Icon, Title } from './styles';

interface DataProps {
    icon: string;
    title: string;
    coming_soon?: boolean;
}

interface Props {
    data: DataProps[];
}

const BenefitisSolution = ({data}: Props) => {
  return (
    <>
        {data.map((item, index) => (
            <Container className='container-benefitisSolutions' key={index}>
                <Icon src={item.icon} />
                <Title>{item.title}{item.coming_soon && <span>(em breve)</span>}</Title>
            </Container>
        ))}
    </>
  )
}

export default BenefitisSolution