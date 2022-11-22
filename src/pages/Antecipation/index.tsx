import React from 'react'
import Menu from '../../components/Menu'
import { Container, ContentPage, ContentTitle, PageTitle, Title, Subtitle, WrapperBanner, ContentBanner, ContentInfo, Date, InfoTitle, InfoText, SecondWrapperBanner, SecondContentBanner, Divider, MoreContents, TitleMoreContent} from './styles'
import BannerContent from '../../assets/banner-contents.png'
import SecondBanner from '../../assets/banner-contents2.png'
import ContentCard from '../../components/ContentCard'
import { ListMoreContents } from '../../utils/lists'
import Footer from '../../components/sections/HomeSections/Footer'

const Antecipation = () => {
  return (
    <Container>
      <Menu />
      <ContentPage>
        <ContentTitle>
          <PageTitle>Conteúdos</PageTitle>
          <Title>A mais nova máquina ultratecnológica que invadiu o Brasil</Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
        </ContentTitle>
        <WrapperBanner>
          <ContentBanner src={BannerContent} alt='A mais nova máquina ultratecnológica' />
        </WrapperBanner>
        <ContentInfo>
          <Date>Out 19,2022</Date>
          <InfoTitle>Lorem ipsum dolor sit amet</InfoTitle>
          <InfoText>consectetur adipiscing elit. Suspendisse tempor mauris in rhoncus malesuada ut rhoncus turpis mauris. Ac tristique etiam sed ut ultrices. Fames eu quis tempor elementum tristique scelerisque in. Ultrices diam venenatis fames viverra mattis tincidunt morbi ornare lorem. Placerat mauris amet, elementum euismod sit. Facilisi non adipiscing quam feugiat bibendum aliquam dui feugiat. Egestas id tortor volutpat amet vestibulum in hendrerit sed phasellus. Orci, odio vel id viverra sapien etiam tempor quis. Lacinia nibh lacinia libero sem a. Elementum eu mauris, justo, condimentum leo et pellentesque. Et sed sed vitae sed commodo at scelerisque.</InfoText>
          <InfoText>Non purus semper volutpat sapien quam ipsum nisi. Risus tortor molestie nec proin in tempor. Rhoncus nisl, pellentesque malesuada eu enim phasellus orci elementum vitae. Non leo etiam purus facilisis lacus tincidunt aliquet dolor. Pellentesque velit eget elit augue proin amet. Ornare tellus congue non amet phasellus pretium quis diam condimentum.</InfoText>
          <InfoTitle>Lorem ipsum dolor sit amet</InfoTitle>
          <InfoText>Non purus semper volutpat sapien quam ipsum nisi. Risus tortor molestie nec proin in tempor. Rhoncus nisl, pellentesque malesuada eu enim phasellus orci elementum vitae. Non leo etiam purus facilisis lacus tincidunt aliquet dolor.</InfoText>
          <SecondWrapperBanner>
            <SecondContentBanner src={SecondBanner} alt='' />
          </SecondWrapperBanner>
          <InfoText className='last-text'>Non purus semper volutpat sapien quam ipsum nisi. Risus tortor molestie nec proin in tempor. Rhoncus nisl, pellentesque malesuada eu enim phasellus orci elementum vitae. Non leo etiam purus facilisis lacus tincidunt aliquet dolor.</InfoText>
          <Divider />
          <MoreContents>
            <TitleMoreContent>Mais conteúdos</TitleMoreContent>
            <ContentCard data={ListMoreContents} />
          </MoreContents>
        </ContentInfo>
      </ContentPage>
      <Footer />
    </Container>
  )
}

export default Antecipation