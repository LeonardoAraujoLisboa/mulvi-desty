import React from 'react'
import { Container, BannerImg, ContentText, Title, SubTitle } from './styles'
import BannerHome from '../../../../assets/banner-home.png'
import BannerHomeMobile from '../../../../assets/mobile/banner-home-mobile.png'
import MulviButton from '../../../MulviButton'

const Banner = () => {
  return (
    <Container className='container-web'>
        <BannerImg src={BannerHome} alt='Do seu jeito no seu mulvi' className='banner-home' />
        <BannerImg src={BannerHomeMobile} alt='Do seu jeito no seu mulvi' className='banner-home-mobile' />
        <ContentText>
            <Title>Do seu jeito, no seu mulvi.</Title>
            <SubTitle>Conheça um mundo de múltiplas possibilidades.</SubTitle>
            <MulviButton />
        </ContentText>
        <MulviButton id='btn-mobile' />
    </Container>
  )
}

export default Banner