import React, {useEffect, useState} from 'react'
import { Input, InputGroup, Label } from 'reactstrap'
import Select, {SingleValue, ActionMeta} from 'react-select'
import MulviButton from '../../../MulviButton'
import {Container, ContentWrapper, ContentInformation, Title, InfoText, ContentSimulate, TitleSimulate, SimulationData, WrapperInput, SimulationResults, SimulationAnotherAccount, TitleResults, ContainerResults, ContentFlag, OptionTitle, ValueMoney, ContentRate, TitleRate, ValueRate, ContentOpenDesty, ContentTextDesty, TextDesty} from './styles'
import {ReactComponent as LogoDesty} from '../../../../assets/desty.svg'
import { colorStyles } from '../../../../utils'

interface SelectPeriodProps {
  label: 'Antecipado (em 1 dia)' | 'Receber a cada 30 dias';
  value: 'Antecipado (em 1 dia)' | 'Receber a cada 30 dias';
}

interface SelectFlagsProps {
  label: 'Master Card e Visa' | 'Elo' | 'Amex e Hiper' | 'Banese Card';
  value: 'Master Card e Visa' | 'Elo' | 'Amex e Hiper' | 'Banese Card';
}

const RateMulviDesty = () => {
  const [saleValue, setSaleValue] = useState('R$ 10,00')
  const [periodValue, setPeriodValue] = useState<SelectPeriodProps>({label: 'Antecipado (em 1 dia)', value: 'Antecipado (em 1 dia)'})
  const [flagsValue, setFlagsValue] = useState<SelectFlagsProps>({label: 'Master Card e Visa', value: 'Master Card e Visa'})

  const handleChange = (event: any) => {
    const {value, name} = event.target
    if (name === 'sale') {
      setSaleValue(value)
    }
  }

  const handleChangeSelectPeriod = (newValue: SingleValue<SelectPeriodProps>, actionMeta: ActionMeta<SelectPeriodProps>) => {
    setPeriodValue({label: newValue!.label, value: newValue!.value})
  }

  const handleChangeSelectFlags = (newValue: SingleValue<SelectFlagsProps>, actionMeta: ActionMeta<SelectFlagsProps>) => {
    setFlagsValue({label: newValue!.label, value: newValue!.value})
  }

  const showOptions = () => {
    if (periodValue.label === 'Antecipado (em 1 dia)') {
      const options: SelectFlagsProps[] = [
        {
          label: 'Master Card e Visa',
          value: 'Master Card e Visa'
        },
        {
          label: 'Elo',
          value: 'Elo'
        },
        {
          label: 'Amex e Hiper',
          value: 'Amex e Hiper'
        },
      ]
      return options
    } else {
      const options: SelectFlagsProps[] = [
        {
          label: 'Master Card e Visa',
          value: 'Master Card e Visa'
        },
        {
          label: 'Elo',
          value: 'Elo'
        },
        {
          label: 'Amex e Hiper',
          value: 'Amex e Hiper'
        },
        {
          label: 'Banese Card',
          value: 'Banese Card'
        },
      ]
      return options
    }
  }

  useEffect(() => {
    showOptions()
  }, [periodValue])

  return (
    <Container id='rate'>
      <ContentInformation>
          <Title>As melhores taxas <span className='attention-strong'>estão aqui.</span></Title>
          <InfoText>Seja no débito, crédito à vista ou parcelado, você recebe em 1 dia útil após a venda. Os valores são transferidos automaticamente para sua conta bancária, sem cobrança da taxa de transferência.</InfoText>
          <MulviButton />
      </ContentInformation>
      <ContentWrapper>
        <ContentSimulate>
          <SimulationData>
            <TitleSimulate>Simule com a <span className='attention-strong'>Mulvi Pay</span></TitleSimulate>
            <WrapperInput>
              <Label>Digite o valor da sua venda</Label>
              <InputGroup>
                <Input value={saleValue} onChange={handleChange} name='sale' />
              </InputGroup>
            </WrapperInput>
            <WrapperInput>
              <Label>Prazo de Recebimento</Label>
              <Select styles={colorStyles} options={[{label: 'Antecipado (em 1 dia)', value: 'Antecipado (em 1 dia)'}, {label: 'Receber a cada 30 dias', value: 'Receber a cada 30 dias'}]} onChange={handleChangeSelectPeriod} defaultValue={periodValue} placeholder='Selecione...' />
            </WrapperInput>
            <WrapperInput className='card-flags'>
              <Label>Bandeiras do Cartão</Label>
              <InputGroup>
              <Select styles={colorStyles} options={showOptions()} onChange={handleChangeSelectFlags} defaultValue={flagsValue} placeholder='Selecione...' />
              </InputGroup>
            </WrapperInput>
          </SimulationData>
          <SimulationResults>
            <TitleResults className='title'>Usando Conta Desty:</TitleResults>
            <ContainerResults>
              <ContentFlag>
                <OptionTitle>No débito</OptionTitle>
                <ValueMoney>R$ 9,83</ValueMoney>
              </ContentFlag>
              <ContentRate>
                <TitleRate>Taxa</TitleRate>
                <ValueRate>1,14%</ValueRate>
              </ContentRate>
            </ContainerResults>
            <ContainerResults className='credit-result'>
              <ContentFlag>
                <OptionTitle>No crédito à vista</OptionTitle>
                <ValueMoney>R$ 8,99</ValueMoney>
              </ContentFlag>
              <ContentRate className='content-rate'>
                <ValueRate>1,80%</ValueRate>
              </ContentRate>
            </ContainerResults>
            <ContainerResults className='credit-installments'>
              <ContentFlag className='content-flag'>
                <OptionTitle className='title-installments'>No crédito parcelado</OptionTitle>
                <ValueMoney>R$ 8,99</ValueMoney>
              </ContentFlag>
              <ContentRate className='content-installments'>
                <InputGroup>
                  <Input type='select'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </InputGroup>
                <ValueRate>1,80%</ValueRate>
              </ContentRate>
            </ContainerResults>
          </SimulationResults>
          <SimulationAnotherAccount>
            <TitleResults className='title'>Conta em outros bancos</TitleResults>
            <ContainerResults>
              <ContentFlag>
                <OptionTitle>No débito</OptionTitle>
                <ValueMoney>R$ 9,83</ValueMoney>
              </ContentFlag>
              <ContentRate>
                <TitleRate>Taxa</TitleRate>
                <ValueRate>1,14%</ValueRate>
              </ContentRate>
            </ContainerResults>
            <ContainerResults className='credit-result'>
              <ContentFlag>
                <OptionTitle>No crédito à vista</OptionTitle>
                <ValueMoney>R$ 8,99</ValueMoney>
              </ContentFlag>
              <ContentRate className='content-rate'>
                <ValueRate>1,80%</ValueRate>
              </ContentRate>
            </ContainerResults>
            <ContainerResults className='credit-installments'>
              <ContentFlag className='content-flag'>
                <OptionTitle className='title-installments'>No crédito parcelado</OptionTitle>
                <ValueMoney>R$ 8,99</ValueMoney>
              </ContentFlag>
              <ContentRate className='content-installments'>
                <InputGroup>
                  <Input type='select'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </InputGroup>
                <ValueRate>1,80%</ValueRate>
              </ContentRate>
            </ContainerResults>
          </SimulationAnotherAccount>
        </ContentSimulate>
      </ContentWrapper>
      <ContentOpenDesty>
        <LogoDesty className='logo-desty-rate' />
        <ContentTextDesty>
          <TextDesty><span className='attention-strong'>Abra sua conta gratuita no Desty</span> e coloque ela como seu domícilio bancário e receba taxas diferenciadas.<br></br>Exclusivo Pessoas Fïsicas (Em breve Pessoa Jurídica)</TextDesty>
        </ContentTextDesty>
      </ContentOpenDesty>
    </Container>
  )
}

export default RateMulviDesty