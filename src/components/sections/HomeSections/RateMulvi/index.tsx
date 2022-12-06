import React, {useState, useEffect} from 'react'
import { Input, InputGroup, Label } from 'reactstrap'
import MulviButton from '../../../MulviButton'
import {Container, ContentWrapper, ContentInformation, Title, InfoText, ContentSimulate, TitleSimulate, SimulationData, WrapperInput, SimulationResults, TitleResults, ContainerResults, ContentFlag, OptionTitle, ValueMoney, ContentRate, TitleRate, ValueRate} from './styles'
import Select, {SingleValue, ActionMeta} from 'react-select'
import { SelectFlagsProps, SelectPeriodProps } from '../../../../utils/interfaces'
import { colorStyles, colorStylesInstalments } from '../../../../utils/styles'
import { moneyMask } from '../../../../utils/masks'

const RateMulvi = () => {
  const [saleValue, setSaleValue] = useState('R$ 10,00')
  const [periodValue, setPeriodValue] = useState<SelectPeriodProps>({label: 'Antecipado (em 1 dia)', value: 'Antecipado (em 1 dia)'})
  const [flagsValue, setFlagsValue] = useState<SelectFlagsProps>({label: 'Master Card e Visa', value: 'Master Card e Visa'})
  const [installmentsValue, setInstallmentsValue] = useState({label: '2x', value: '2x'})
  const [debitRateValue, setDebitRateValue] = useState('')
  const [creditRateValue, setCreditRateValue] = useState('')
  const [installmentsRateValue, setInstallmentsRateValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    setSaleValue(value)
  }

  const handleChangeSelectPeriod = (newValue: SingleValue<SelectPeriodProps>, actionMeta: ActionMeta<SelectPeriodProps>) => {
    setPeriodValue({label: newValue!.label, value: newValue!.value})
  }

  const handleChangeSelectFlags = (newValue: SingleValue<SelectFlagsProps>, actionMeta: ActionMeta<SelectFlagsProps>) => {
    setFlagsValue({label: newValue!.label, value: newValue!.value})
    updateDebitCreditValue(newValue!.label)
  }

  const handleChangeSelectInstallments = (newValue: SingleValue<{label: string, value: string}>, actionMeta: ActionMeta<{label: string, value: string}>) => {
    setInstallmentsValue({label: newValue!.label, value: newValue!.value})
    updateInstalmentsValue(newValue!.label)
  }

  const updateInstalmentsValue = (installments: string) => {
    if (periodValue.label === 'Antecipado (em 1 dia)') {
      if (flagsValue.label === 'Master Card e Visa') {
        if (installments === '1x') {
          setInstallmentsRateValue('')
        } else if (installments === '2x') {
          setInstallmentsRateValue('6,07%')
        } else if (installments === '3x') {
          setInstallmentsRateValue('6,75%')
        } else if (installments === '4x') {
          setInstallmentsRateValue('7,96%')
        } else if (installments === '5x') {
          setInstallmentsRateValue('8,64%')
        } else if (installments === '6x') {
          setInstallmentsRateValue('11,16%')
        } else if (installments === '7x') {
          setInstallmentsRateValue('12,14%')
        } else if (installments === '8x') {
          setInstallmentsRateValue('12,83%')
        } else if (installments === '9x') {
          setInstallmentsRateValue('13,51%')
        } else if (installments === '10x') {
          setInstallmentsRateValue('14,18%')
        } else if (installments === '11x') {
          setInstallmentsRateValue('14,87%')
        } else if (installments === '12x') {
          setInstallmentsRateValue('15,53%')
        }
      } else if (flagsValue.label === 'Elo') {
        if (installments === '1x') {
          setInstallmentsRateValue('')
        } else if (installments === '2x') {
          setInstallmentsRateValue('6,93%')
        } else if (installments === '3x') {
          setInstallmentsRateValue('7,64%')
        } else if (installments === '4x') {
          setInstallmentsRateValue('8,85%')
        } else if (installments === '5x') {
          setInstallmentsRateValue('9,54%')
        } else if (installments === '6x') {
          setInstallmentsRateValue('12,06%')
        } else if (installments === '7x') {
          setInstallmentsRateValue('13,22%')
        } else if (installments === '8x') {
          setInstallmentsRateValue('13,91%')
        } else if (installments === '9x') {
          setInstallmentsRateValue('14,60%')
        } else if (installments === '10x') {
          setInstallmentsRateValue('15,27%')
        } else if (installments === '11x') {
          setInstallmentsRateValue('15,95%')
        } else {
          setInstallmentsRateValue('16,61%')
        }
      } else if (flagsValue.label === 'Amex e Hiper') {
        if (installments === '1x') {
          setInstallmentsRateValue('')
        } else if (installments === '2x') {
          setInstallmentsRateValue('6,53%')
        } else if (installments === '3x') {
          setInstallmentsRateValue('7,21%')
        } else if (installments === '4x') {
          setInstallmentsRateValue('8,42%')
        } else if (installments === '5x') {
          setInstallmentsRateValue('9,10%')
        } else if (installments === '6x') {
          setInstallmentsRateValue('11,62%')
        } else if (installments === '7x') {
          setInstallmentsRateValue('12,51%')
        } else if (installments === '8x') {
          setInstallmentsRateValue('13,21%')
        } else if (installments === '9x') {
          setInstallmentsRateValue('13,93%')
        } else if (installments === '10x') {
          setInstallmentsRateValue('14,61%')
        } else if (installments === '11x') {
          setInstallmentsRateValue('15,34%')
        } else {
          setInstallmentsRateValue('16,00%')
        }
      }
    } else {
      if (flagsValue.label === 'Master Card e Visa') {
        if (installments === '1x') {
          setInstallmentsRateValue('')
        } else if (installments === '2x' || installments === '3x' || installments === '4x' || installments === '5x' || installments === '6x') {
          setInstallmentsRateValue('4,38%')
        } else {
          setInstallmentsRateValue('4,69%')
        }
      } else if (flagsValue.label === 'Elo') {
        if (installments === '1x') {
          setInstallmentsRateValue('')
        } else if (installments === '2x' || installments === '3x' || installments === '4x' || installments === '5x' || installments === '6x') {
          setInstallmentsRateValue('5,27%')
        } else {
          setInstallmentsRateValue('5,78%')
        }
      } else if (flagsValue.label === 'Amex e Hiper') {
        if (installments === '1x') {
          setInstallmentsRateValue('')
        } else if (installments === '2x' || installments === '3x' || installments === '4x' || installments === '5x' || installments === '6x') {
          setInstallmentsRateValue('4,84%')
        } else {
          setInstallmentsRateValue('5,11%')
        }
      } else if (flagsValue.label === 'Banese Card') {
        if (installments === '1x') {
          setInstallmentsRateValue('')
        } else if (installments === '2x' || installments === '3x' || installments === '4x' || installments === '5x' || installments === '6x') {
          setInstallmentsRateValue('2,24%')
        } else {
          
          setInstallmentsRateValue('2,88%')
        }
      }
    }
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

  const showOptionsInstallments = () => {
    let allOptionInstallments = []
    for (let index = 2; index <= 12; index++) {
      allOptionInstallments.push(index)
    }
    const restructuring = allOptionInstallments.map((item) => {
      const data = {
        label: `${item}x`,
        value: `${item}x`
      }
      return data
    }) 
    return restructuring  
  }

  const updateDebitCreditValue = (flags: string) => {
    if (periodValue.label === 'Antecipado (em 1 dia)') {
      if (flags === 'Master Card e Visa') {
        setDebitRateValue('1,35%')
        setCreditRateValue('3,48%')
      } else if (flags === 'Elo') {
        setDebitRateValue('1,91%')
        setCreditRateValue('4,14%')
      } else {
        setDebitRateValue('1,68%')
        setCreditRateValue('3,58%')
      }
    } else {
      if (flags === 'Master Card e Visa') {
        setDebitRateValue('1,35%')
        setCreditRateValue('2,41%')
      } else if (flags === 'Elo') {
        setDebitRateValue('1,91%')
        setCreditRateValue('3,07%')
      } else if (flags === 'Amex e Hiper') {
        setDebitRateValue('1,68%')
        setCreditRateValue('2,59%')
      } else {
        setDebitRateValue('1,08%')
        setCreditRateValue('1,80%')
      }
    }
  }

  useEffect(() => {
    showOptions()
    updateDebitCreditValue(flagsValue.label)
    updateInstalmentsValue(installmentsValue.label)
  }, [periodValue, flagsValue])

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
            <WrapperInput className='sale-value'>
              <Label>Digite o valor da sua venda</Label>
              <InputGroup>
                <Input value={saleValue} onChange={(event) => handleChange(moneyMask(event))} name='sale' />
              </InputGroup>
            </WrapperInput>
            <WrapperInput>
              <Label>Prazo de Recebimento</Label>
              <Select styles={colorStyles} options={[{label: 'Antecipado (em 1 dia)', value: 'Antecipado (em 1 dia)'}, {label: 'Receber a cada 30 dias', value: 'Receber a cada 30 dias'}]} onChange={handleChangeSelectPeriod} defaultValue={periodValue} placeholder='Selecione...' className='period-select' />
            </WrapperInput>
            <WrapperInput className='card-flags'>
              <Label>Bandeiras do Cartão</Label>
              <InputGroup>
              <Select styles={colorStyles} options={showOptions()} onChange={handleChangeSelectFlags} defaultValue={flagsValue} placeholder='Selecione...' className='flags-select' />
              </InputGroup>
            </WrapperInput>
          </SimulationData>
          <SimulationResults>
            <TitleResults className='title'>Usando conta Desty</TitleResults>
            <ContainerResults>
              <ContentFlag>
                <OptionTitle>No débito</OptionTitle>
                <ValueMoney>R$ {(parseFloat(saleValue.replace('R$ ', '').replace('.', '').replace(',', '.')) - (parseFloat(saleValue.replace('R$ ', '').replace('.', '').replace(',', '.')) * (parseFloat(debitRateValue.replace('%', '').replace(',', '.'))/100))).toFixed(2)}</ValueMoney>
              </ContentFlag>
              <ContentRate>
                <TitleRate>Taxa</TitleRate>
                <ValueRate>{debitRateValue}</ValueRate>
              </ContentRate>
            </ContainerResults>
            <ContainerResults className='credit-result'>
              <ContentFlag>
                <OptionTitle>No crédito à vista</OptionTitle>
                <ValueMoney>R$ {(parseFloat(saleValue.replace('R$ ', '').replace('.', '').replace(',', '.')) - (parseFloat(saleValue.replace('R$ ', '').replace('.', '').replace(',', '.')) * (parseFloat(creditRateValue.replace('%', '').replace(',', '.'))/100))).toFixed(2)}</ValueMoney>
              </ContentFlag>
              <ContentRate className='content-rate'>
                <ValueRate>{creditRateValue}</ValueRate>
              </ContentRate>
            </ContainerResults>
            <ContainerResults className='credit-installments'>
              <ContentFlag className='content-flag'>
                <OptionTitle className='title-installments'>No crédito parcelado</OptionTitle>
                <ValueMoney>{installmentsValue.label !== '1x' && `R$ ${(parseFloat(saleValue.replace('R$ ', '').replace('.', '').replace(',', '.')) - (parseFloat(saleValue.replace('R$ ', '').replace('.', '').replace(',', '.')) * (parseFloat(installmentsRateValue.replace('%', '').replace(',', '.'))/100))).toFixed(2)}`}</ValueMoney>
              </ContentFlag>
              <ContentRate className='content-installments'>
                <InputGroup>
                  <Select styles={colorStylesInstalments} options={showOptionsInstallments()} onChange={handleChangeSelectInstallments} defaultValue={installmentsValue} placeholder='Selecione...' className='installments-select' />
                </InputGroup>
                <ValueRate>{installmentsRateValue}</ValueRate>
              </ContentRate>
            </ContainerResults>
          </SimulationResults>
        </ContentSimulate>
      </ContentWrapper>
    </Container>
  )
}

export default RateMulvi