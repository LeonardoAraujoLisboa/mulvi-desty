import React from 'react'
import {Container, ContentWhoWeAre, WrapperImage, WhoWeAreImg, ContentText, Title, SubTitle, Text} from './styles'
import ImgWhoWeAre from '../../../../assets/who-we-are.svg'
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
            <Text>Mais do que uma maquininha, somos o parceiro que impulsiona o seu negócio. Por meio da nossa tecnologia financeira, estabelecemos parcerias relevantes, viemos para multiplicar e viabilizar o seu crescimento.</Text>
            <Text>Com nosso conhecimento e nossa tecnologia, fomentamos o empreendedorismo e potencializamos a economia por meio da evolução financeira do mercado.</Text>
            <Text>Contribuímos com os empreendedores, impactando positivamente o desenvolvimento da economia a partir do aprimoramento da gestão financeira e de inovações para os negócios.</Text>
            <a className='know-more' href='https://mulvi.com.br' target={'_blank'} rel="noreferrer">Conheça mais <Forward /></a>
          </ContentText>
        </ContentWhoWeAre>
    </Container>
  )
}

export default WhoWeAre