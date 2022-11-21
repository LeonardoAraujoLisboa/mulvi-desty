import React from 'react'
import {Container, ContentIcon, WrapperFooter, ContentMenu, MenuContainer, MenuItem, ContainerCentralSocial, ContentCentral, ContentLocales, Title, ContentContact, Contact, ContentSocialMedia, ContentMedias, ContainerPolitic, ContentPolitic, PoliticItem, ContainerInfoCompany, TextCompany} from './styles'
import {ReactComponent as LogoMulvi} from '../../../../assets/logo-mulvi.svg'
import {ReactComponent as Instagram} from '../../../../assets/instagram.svg'
import {ReactComponent as Facebook} from '../../../../assets/facebook.svg'
import {ReactComponent as LinkedIn} from '../../../../assets/linkedin.svg'
import {ReactComponent as FooterIcon} from '../../../../assets/footer-icon.svg'

const Footer = () => {
  return (
    <Container>
      <ContentIcon>
        <FooterIcon />
      </ContentIcon>
      <WrapperFooter>
        <ContentMenu>
          <LogoMulvi className='logo-mulvi' />
          <MenuContainer>
            <MenuItem href='#benefits'>Vantagens</MenuItem>
            <MenuItem href='#rate'>Taxas</MenuItem>
            <MenuItem href='#solutions'>Soluções</MenuItem>
            <MenuItem href='#contents'>Conteúdos</MenuItem>
            <MenuItem href='#faq'>Perguntas Frequentes</MenuItem>
            <MenuItem href='#whoWeAre'>Quem Somos</MenuItem>
          </MenuContainer>
        </ContentMenu>
        <ContainerCentralSocial>
          <ContentCentral>
            <Title className='central-attendance'>Central de Atendimento</Title>
            <ContentContact>
              <ContentLocales>
                <Contact>Capitais e regiões metropolitanas:</Contact>
                <span className='central-contact'>4002-2360</span>
              </ContentLocales>
              <ContentLocales>
                <Contact>Demais localidades:</Contact>
                <span className='central-contact'>0800 021 7100</span>
              </ContentLocales>
              <ContentLocales>
                <Contact>Ouvidoria Mulvi Pay:</Contact>
                <span className='central-contact'>0800 021 7077</span>
              </ContentLocales>
            </ContentContact>
          </ContentCentral>
          <ContentSocialMedia>
            <Title className='title-talk'>Vem conversar com a gente</Title>
            <ContentMedias>
              <a href={'https://www.instagram.com/soumulvi/'} target={'_blank'} rel="noreferrer">
                <Instagram />
              </a>
              <a href={'https://www.linkedin.com/company/mulvi/'} target={'_blank'} rel="noreferrer">
                <Facebook />
              </a>
              <a href={'https://www.facebook.com/profile.php?id=100084447383790'} target={'_blank'} rel="noreferrer">
                <LinkedIn />
              </a>
            </ContentMedias>
          </ContentSocialMedia>
        </ContainerCentralSocial>
        <ContainerPolitic>
          <ContentPolitic>
            <PoliticItem href='/'>Direitos do Titular</PoliticItem>
            <PoliticItem href='/'>Termos de uso</PoliticItem>
            <PoliticItem href='/'>Política de Privacidade</PoliticItem>
            <PoliticItem href='/'>Política de Segurança</PoliticItem>
          </ContentPolitic>
        </ContainerPolitic>
      </WrapperFooter>
      <ContainerInfoCompany>
        <TextCompany>Mulvi Instituição de Pagamentos SA sob n 03.847.413/0001-02, com sede na Cidade de Aracaju, Estado de Sergipe</TextCompany>
      </ContainerInfoCompany>
    </Container>
  )
}

export default Footer