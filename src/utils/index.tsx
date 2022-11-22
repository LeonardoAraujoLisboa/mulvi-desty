import Ticket from '../assets/ticket.png'
import MainMistakes from '../assets/main-mistakes.png'
import WorkingCapital from '../assets/working-capital.png'
import Antecipation from '../assets/antecipation.png'
import Monitoring from '../assets/monitoring.svg'
import Recharge from '../assets/recharge.svg'
import Ecommerce from '../assets/e-commerce.svg'
import Transactions from '../assets/transactions.svg'
import AccountDesty from '../assets/account-desty.svg'
import Whatsapp from '../assets/whatsapp.svg'
import Food from '../assets/food.svg'
import PixAndQrCode from '../assets/pix-qr-code.svg'
import Payment from '../assets/payment.svg'
import PaymentD1D30 from '../assets/payment-d1-d30.svg'
import Receivables from '../assets/receivables.svg'
import Checked from '../assets/checked.svg'
import MoreContents from '../assets/more-contents.png'
import MoreContents2 from '../assets/more-contents.png'
import MoreContents3 from '../assets/more-contents.png'

export const ListCharacteristics = [
    {
        text: 'Modelo: S920'
    },
    {
        text: 'Fabricante: PAX'
    },
    {
        text: 'Conectividade: GPRS, 3G e Wi-Fi'
    },
    {
        text: 'Aceitação: Aceita cartão com chip – Aceita tarja e NFC'
    },
    {
        text: 'Teclado: físico'
    },
    {
        text: 'Tela: Colorida e Touch'
    },
]

export const ListBusinessContentCard = [
    {
        icon: Ticket,
        info_icon: 'Ticket médio',
        title: 'Ticket médio: saiba como aumentar ele na sua empresa',
        text: 'O ticket médio indica o valor médio gasto por seus clientes. Mas como aumentar esse valor?'
    },
    {
        icon: MainMistakes,
        info_icon: 'Principais erros',
        title: 'Os principais erros de quem inicia um empreendimento',
        text: 'Será que você está cometendo um destes principais erros do empreendedor iniciante?'
    },
    {
        icon: WorkingCapital,
        info_icon: 'Capital de giro',
        title: 'Capital de giro: o que é e qual a sua importância?',
        text: 'Você sabe o que é e como calcular seu capital de giro? '
    },
    {
        icon: Antecipation,
        info_icon: 'Antecipação automática?',
        title: 'O que é antecipação automática?',
        text: 'Entenda melhor como funciona e quais as vantagens e desvantagens para o negócio!'
    }
]

export const ListBenefitsSolutionsFirstFirstGroup = [
    {
        icon: Monitoring,
        title: 'Monitoramento das vendas em tempo real',
    },
    {
        icon: PaymentD1D30,
        title: 'Pagamento em D+1 ou D+30',
    },
    {
        icon: Receivables,
        title: 'Antecipação de Recebíveis',
    },
    {
        icon: Payment,
        title: 'Link de Pagamento',
        coming_soon: true
    },
    {
        icon: Transactions,
        title: 'Transações recorrentes',
        coming_soon: true
    },
    {
        icon: Recharge,
        title: 'Recarga de celular',
        coming_soon: true
    },
]

export const ListBenefitsSolutionsFirstSecondGroup = [
    {
        icon: AccountDesty,
        title: 'Conta Digital Desty',
    },
    {
        icon: Food,
        title: 'Voucher Alimentação',
    },
    {
        icon: Whatsapp,
        title: 'Whatsapp',
        coming_soon: true
    },
    {
        icon: PixAndQrCode,
        title: 'PIX e QR code',
        coming_soon: true
    },
    {
        icon: Ecommerce,
        title: 'Marketplace e E-commerce',
        coming_soon: true
    },
]

export const ListBenefitsSolutionsSecond = [
    {
        icon: Checked,
        title: 'Débito',
    },
    {
        icon: Checked,
        title: 'Crédito à vista',
    },
    {
        icon: Checked,
        title: 'Crédito Parcelado Loja',
    },
    {
        icon: Checked,
        title: 'Vale Alimentação',
    },
]

export const ListMoreContents = [
    {
        icon: MoreContents,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: 'Out 19,2022'
    },
    {
        icon: MoreContents2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: 'Out 19,2022'
    },
    {
        icon: MoreContents3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: 'Out 19,2022'
    }
]

export const colorStyles: any = {
    control: (styles: Object, {isFocused}: any) => ({
      ...styles,
      backgroundColor: '#fff',
      height: '48px',
      width: '250px',
      border: '1px solid #A5AAB4',
      outline: isFocused === true && '1px solid #A5AAB4',
      '&:hover': {
        border: '1px solid #A5AAB4'
      },
      borderRadius: '12px',
    }),
    singleValue: (styles: Object) => ({
      ...styles,
      color: '#141923'
    }),
    menu: (styles: Object) => ({
      ...styles,
      backgroundColor: '#fff'
    }),
    dropdownIndicator: (styles: Object) => ({
      ...styles,
      color: '#46505A'
    }),
    indicatorSeparator: (styles: Object) => ({
      ...styles,
      display: 'none'
    }),
}