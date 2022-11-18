import React from 'react'
import { Container, ContentImg, SingleSolutionsImg, ContentSolution, Title, SolutionText, ContainerBenefitsSolutions, FirstContent, SecondContent, FirstContainer, SecondContainer } from './styles'
import SingleSolutions from '../../../../assets/single-solutions.png'
import BenefitisSolution from '../../../BenefitsSolutions'
import MulviButton from '../../../MulviButton'
import MachineCharacteristics from '../../../MachineCharacteristics'
import { ListBenefitsSolutionsFirstFirstGroup, ListBenefitsSolutionsFirstSecondGroup, ListBenefitsSolutionsSecond, ListCharacteristics } from '../../../../utils'
import Machine from '../../../../assets/machine.png'

const SolutionsMulvi = () => {
  return (
    <Container id='solutions'>
        <FirstContainer>
            <ContentImg>
                <SingleSolutionsImg src={SingleSolutions} alt='soluções únicas' className='business-bg' />
            </ContentImg>
            <ContentSolution>
                <Title className='first-title'>Soluções únicas para o <span className='attention-strong'>crescimento do seu negócio</span></Title>
                <SolutionText>Muito mais que a maquininha Android mais moderna do mercado com as melhores taxas do Brasil. Ou seja, tudo que você precisa para fechar negócios sem perda de tempo e fazer sua empresa decolar.</SolutionText>
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
    </Container>
  )
}

export default SolutionsMulvi