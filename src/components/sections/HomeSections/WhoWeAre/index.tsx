import React from 'react'
import {Container, ContentWhoWeAre, WrapperImage, WhoWeAreImg, ContentText, Title, SubTitle, Text} from './styles'
import ImgWhoWeAre from '../../../../assets/who-we-are.svg'
import { Link } from 'react-router-dom'
import {ReactComponent as Forward} from '../../../../assets/forward.svg'

const WhoWeAre = () => {
  return (
    <Container id='whoWeAre'>
        <ContentWhoWeAre>
          <WrapperImage>
            <WhoWeAreImg src={ImgWhoWeAre} alt='Soluções para o seu negócio' />
          </WrapperImage>
          <ContentText>
            <Title>Quem Somos</Title>
            <SubTitle>Um ecossistema de soluções <span className='attention-strong'>para o seu negócio</span></SubTitle>
            <Text>Seja no débito, crédito à vista ou parcelado, você recebe em 1 dia útil após a venda. Os valores são transferidos automaticamente para sua conta bancária, sem cobrança da taxa de transferência.</Text>
            <Text>Seja no débito, crédito à vista ou parcelado, você recebe em 1 dia útil após a venda. Os valores são transferidos automaticamente para sua conta bancária, sem cobrança da taxa de transferência.</Text>
            <Text>Seja no débito, crédito à vista ou parcelado, você recebe em 1 dia útil após a venda. Os valores são transferidos automaticamente para sua conta bancária, sem cobrança da taxa de transferência.</Text>
            <Link className='know-more' to='/'>Conheça mais <Forward /></Link>
          </ContentText>
        </ContentWhoWeAre>
    </Container>
  )
}

export default WhoWeAre