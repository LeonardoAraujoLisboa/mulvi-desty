import React from 'react'
import { Container, ContentImg, SingleSolutionsImg, ContentSolution, Title, SolutionText, ContainerBenefitsSolutions, FirstContent, SecondContent, FirstContainer, SecondContainer, MulviDestyContainer, WrapperImg, MulviDestyImg, ContentLogos, ContentInfoMulviDesty, InfoMulviDestyText, ContentCallBack, CallBackTitle, ContentStore, ContentRent, RentText, Link } from './styles'
import SingleSolutions from '../../../../assets/single-solutions.png'
import {ReactComponent as MulviPayLogo} from '../../../../assets/mulvi-pay-second.svg'
import {ReactComponent as DestyLogo} from '../../../../assets/desty.svg'
import MulviDesty from '../../../../assets/mulvi-desty.png'
import {ReactComponent as GooglePlay} from '../../../../assets/google-play.svg'
import {ReactComponent as AppStore} from '../../../../assets/app-store.svg'
import BenefitisSolution from '../../../BenefitsSolutions'
import MulviButton from '../../../MulviButton'
import MachineCharacteristics from '../../../MachineCharacteristics'
import { ListBenefitsSolutionsFirstFirstGroup, ListBenefitsSolutionsFirstSecondGroup, ListBenefitsSolutionsSecond, ListCharacteristics } from '../../../../utils/lists'
import Machine from '../../../../assets/machine.png'

const SolutionsMulviDesty = () => {
  return (
    <Container id='solutions'>
        <FirstContainer>
            <ContentImg>
                <SingleSolutionsImg src={SingleSolutions} alt='soluções únicas' className='business-bg' />
            </ContentImg>
            <ContentSolution>
                <Title className='first-title'>Soluções únicas para o <span className='attention-strong'>crescimento do seu negócio</span></Title>
                <SolutionText>Tudo que você precisa para fechar negócios sem perder tempo pra fazer sua empresa decolar.</SolutionText>
                <ContainerBenefitsSolutions className='container-benefits-first'>
                    <FirstContent className='first-content-first'>
                        <BenefitisSolution data={ListBenefitsSolutionsFirstFirstGroup} />
                    </FirstContent>
                    <SecondContent className='second-content-first'>
                        <BenefitisSolution data={ListBenefitsSolutionsFirstSecondGroup} />
                    </SecondContent>
                </ContainerBenefitsSolutions>
                <MulviButton />
            </ContentSolution>
        </FirstContainer>
        <SecondContainer>
            <ContentSolution>
                <Title className='second-title'>Mais do que uma maquininha, <span className='attention-strong'>somos o parceiro que movimenta o seu negócio.</span></Title>
                <ContentRent>
                    <RentText><span className='attention-strong'>Sua maquininha pode sair com custo zero!</span><br></br>Quanto mais você faturar, mais desconto você ganha. Procure nossos consultores Mulvi Pay</RentText>
                </ContentRent>
                <ContainerBenefitsSolutions className='container-benefits-second'>
                    <FirstContent className='first-content-second'>
                        <BenefitisSolution data={ListBenefitsSolutionsSecond} />
                    </FirstContent>
                </ContainerBenefitsSolutions>
                <MachineCharacteristics title='Características da maquininha' list={ListCharacteristics} />
            </ContentSolution>
            <ContentImg className='bg-machine'>
                <SingleSolutionsImg src={Machine} alt='soluções únicas' className='machine-bg' />
            </ContentImg>
        </SecondContainer>
        <MulviDestyContainer>
            <WrapperImg>
                <MulviDestyImg src={MulviDesty} alt='Mulvi-Desty' />
            </WrapperImg>
            <ContentLogos>
                <MulviPayLogo className='mulvi-logo' /> <span className='plus'>+</span> <DestyLogo className='desty-logo' />{'\n'}
                <span className='attention-strong'>é mais dinheiro no bolso.</span>
                <ContentInfoMulviDesty>
                    <InfoMulviDestyText>A parceria da Mulvi Pay com o Desty, o banco digital do Banese, traz oportunidades e benefícios únicos para o seu negócio.</InfoMulviDestyText>
                    <InfoMulviDestyText>Abra sua conta gratuita no Desty, coloque ela como seu domícilio bancário na Mulvi Pay e receba taxas diferenciadas.</InfoMulviDestyText>
                    <InfoMulviDestyText>*Exclusivo Pessoas Físicas (Em breve Pessoa Jurídica)</InfoMulviDestyText>
                </ContentInfoMulviDesty>
                <ContentCallBack>
                    <CallBackTitle>Baixe o app e crie sua conta no Desty.</CallBackTitle>
                    <ContentStore>
                        <Link href={'https://play.google.com/store/apps/details?id=br.com.banese.digital&hl=pt'} target={'_blank'}>
                            <GooglePlay className='google-play' />
                        </Link>
                        <Link href={'https://apps.apple.com/br/app/desty/id1541641523'} target={'_blank'}>
                            <AppStore className='apple-store' />
                        </Link>
                    </ContentStore>
                </ContentCallBack>
            </ContentLogos>
        </MulviDestyContainer>
    </Container>
  )
}

export default SolutionsMulviDesty