import React from 'react'
import Menu from '../../components/Menu'
import { Container, ContentPage, ContentTitle, PageTitle, Title, Subtitle, WrapperBanner, ContentBanner, ContentInfo, Date, InfoTitle, InfoText, Divider, MoreContents, TitleMoreContent, List, ListItem, Link} from './styles'
import AntecipationImg from '../../assets/tablet/antecipation.png'
import ContentCard from '../../components/ContentCard'
import { ListBusinessContentCard } from '../../utils/lists'
import Footer from '../../components/sections/HomeSections/Footer'
import { useParams } from 'react-router-dom'

const Antecipation = () => {
  const {id} = useParams()

  return (
    <Container>
      <Menu />
      <ContentPage>
        <ContentTitle>
          <PageTitle>Conteúdos</PageTitle>
          <Title>O que é antecipação automática e quais as vantagens?</Title>
          <Subtitle>Conhece o serviço de antecipação automática? Entenda melhor como funciona e quais as vantagens e desvantagens para o negócio!</Subtitle>
        </ContentTitle>
        <WrapperBanner>
          <ContentBanner src={AntecipationImg} alt='Principais erros' />
        </WrapperBanner>
        <ContentInfo>
          <Date>28 de Outubro de 2022</Date>
          <InfoText>Uma pesquisa feita pelo Datafolha revelou que 75% dos clientes de cartão de crédito fazem compras de serviços e produtos por meio de parcelamento. Somente uma minoria de 16% afirmou poder comprar um bem durável com dinheiro à vista.</InfoText>
          <InfoText>Essa facilidade para o cliente pode representar uma grande dificuldade para o lojista, uma vez que pode levar até 1 ano para que ele receba o pagamento, caso a compra seja parcelada em 12 vezes, por exemplo. Mas já pensou na possibilidade de antecipar de modo regular os valores de vendas feitas a prazo sem a necessidade de solicitar a cada necessidade à adquirente? Esse recurso é conhecido como antecipação automática e traz muitas vantagens para o negócio.</InfoText>
          <InfoText>Neste artigo, vamos detalhar o funcionamento desse serviço, bem como as vantagens e desvantagens que envolvem a antecipação automática.</InfoText>
          <InfoTitle>O que é antecipação automática</InfoTitle>
          <InfoText>A antecipação automática de recebíveis é um serviço de crédito fornecido por credenciadoras e que consiste no pagamento antecipado de vendas de boletos e cartões de crédito feitos a prazo. Tudo isso ocorre de forma automática, sem que o empresário precise se preocupar.</InfoText>
          <InfoText>Para exemplificar, digamos que a loja tenha feito uma venda no cartão de crédito que seria depositada em sua conta dentro de 30 dias. Com a antecipação automática, o valor é recebido pela empresa em menos tempo, muitas vezes até mesmo no próximo dia útil, de acordo com as condições definidas na contratação do serviço. Para ter acesso ao crédito antecipado, é cobrada uma taxa que incide sobre o valor da operação , que varia conforme a credenciadora.</InfoText>
          <InfoText>Por ser automática, não é necessário que o lojista entre em contato com a instituição para fazer a solicitação. Basta requerer a automatização apenas uma vez, e a transferência é liberada sempre pouco tempo depois da venda a prazo.</InfoText>
          <InfoTitle>Quais as vantagens?</InfoTitle>
          <InfoText>Apesar do pagamento da taxa (que ocorre em qualquer operação de crédito), a antecipação automática de recebíveis traz muitas vantagens ao fluxo de caixa da empresa. Conheça alguns deles!</InfoText>
          <br></br>
          <InfoText style={{fontWeight: 700}}>Disponibilidade de recursos</InfoText>
          <InfoText>Em primeiro lugar, a empresa contará com dinheiro das vendas sempre disponível, e de modo regular. Assim, será possível oferecer pagamentos a prazo para os clientes, sem que isso impacte significativamente a liquidez do caixa do negócio.</InfoText>
          <InfoText>Com isso, o valor da venda, na maior parte dos casos, cairá na conta no mesmo mês corrente. Isso facilita bastante o gerenciamento financeiro do negócio. Afinal, controlar contas a receber a prazo não é uma tarefa tão simples.</InfoText>
          <InfoText>Dessa forma, o empresário tem dinheiro em mãos mais rapidamente para pagar fornecedores, custear as operações e fazer investimentos.</InfoText>
          <InfoText>Esse tipo de serviço é especialmente vantajoso para empresas que estão iniciando suas atividades. Nesses casos, normalmente são feitos altos investimentos iniciais, e o retorno financeiro pode ser demorado, especialmente se há muitas vendas a prazo.<br></br>Com a antecipação automática de recebíveis, o negócio já consegue um retorno mais rápido, mesmo que tenha que arcar com uma pequena taxa pela operação. Isso contribui para que o fluxo financeiro do negócio permaneça equilibrado.</InfoText>
          <br></br>
          <InfoText style={{fontWeight: 700}}>Crédito com taxa mais baratas</InfoText>
          <InfoText>A antecipação é uma operação que visa trazer o valor futuro para o valor presente . No entanto, as taxas são mais reduzidas. Afinal, você está recebendo uma quantia que já pertence ao seu negócio, e os riscos para a operadora são menores. Dessa forma, a empresa não precisa se comprometer com um endividamento.</InfoText>
          <InfoText style={{fontWeight: 700}}>Menos burocracia</InfoText>
          <InfoText>A obtenção de crédito em uma instituição financeira pode ser um processo bastante burocrático, exigindo diversos documentos e demandando tempo para conferência. Esse serviço pode ser contratado diretamente com a adquirente, levando apenas alguns minutos.</InfoText>
          <InfoText style={{fontWeight: 700}}>Redução do impacto de vender a prazo</InfoText>
          <InfoText>Oferecer aos clientes diferentes formas de pagamento é muito importante para atrair o público e fazer mais vendas. O pagamento a prazo, no entanto, pode desequilibrar o caixa do negócio.</InfoText>
          <InfoText>Nesse cenário, a antecipação resolve esse problema, pois evita que o caixa do negócio fique descapitalizado com muitas contas a receber. Além disso, as vendas a prazo serão recebidas em menor tempo.</InfoText>
          <InfoTitle>E as desvantagens, existem?</InfoTitle>
          <InfoText>As vantagens da antecipação são óbvias. Mas, como qualquer operação financeira, é preciso dar atenção a alguns pontos importantes.</InfoText>
          <InfoText style={{fontWeight: 700}}>Taxas vão reduzir o lucro potencial</InfoText>
          <InfoText>A taxa paga pelo serviço de antecipação se torna um custo a mais que deverá ser levado em conta e acrescido às taxas convencionais cobradas pela operadora.</InfoText>
          <InfoText>Risco de dependência financeira do crédito antecipado<br></br>O hábito de antecipar recebíveis pode tornar o negócio dependente e fazer o empresário perder o controle do recebimento de parcelas futuras — se não for bem gerenciado o que foi antecipado e o que não foi. Por isso, é preciso que essa estratégia parta de um bom planejamento estratégico e financeiro.</InfoText>
          <InfoText style={{fontWeight: 700}}>Aumento do preço final ao consumidor</InfoText>
          <InfoText>Uma vez que haverá um custo adicional, esse valor será no fim repassado ao cliente, caso não queira reduzir sua margem de lucro. Assim, deverá ser feita uma boa precificação para não comprometer sua competitividade no mercado.</InfoText>
          <InfoTitle>Como a antecipação automática pode ser interessante para o seu negócio?</InfoTitle>
          <InfoText>A antecipação de recebíveis é uma solução muito interessante para as empresas que desejam equilibrar seu fluxo de caixa. Para garantir resultados satisfatórios na estratégia, é importante avaliar os prós e contras e dar atenção a algumas ações, tais como:</InfoText>
          <List>
            <ListItem>tente não agregar a taxa de serviço de antecipação aos preços de venda, evitando perder clientes e vantagem competitiva;</ListItem>
            <ListItem>estude o contrato feito com a adquirente para entender todas as condições do serviço a fim de evitar cláusulas indesejadas, ou mesmo o serviço de antecipação automática, se esse não for objetivo;</ListItem>
            <ListItem>avalie as necessidades de recursos do seu negócio, para determinar se está necessitando de capital de giro ou não.</ListItem>
          </List>
          <InfoText>A antecipação automática de recebíveis do cartão de crédito é uma estratégia muito vantajosa, especialmente para empresas que precisam fortalecer e equilibrar seu fluxo de caixa. No entanto, essa decisão deve partir de um bom planejamento financeiro, levando em conta todas as vantagens e riscos da operação.</InfoText>
          <InfoText style={{fontWeight: 700}}>O que achou das dicas?</InfoText>
          <InfoText>Nos siga nas redes sociais para saber mais. Estamos no <Link href='https://www.linkedin.com/company/mulvi/' target={'_blank'}>Facebook</Link>, no <Link href='https://www.facebook.com/profile.php?id=100084447383790' target={'_blank'}>LinkedIn</Link> e no <Link href='https://www.instagram.com/soumulvi/' target={'_blank'}>Instagram</Link>.</InfoText>
          <Link href='https://www.adiq.com.br/blog/' target={'_blank'}>Fonte: adiq.com.br/blog</Link>
          <Divider />
          <MoreContents>
            <TitleMoreContent>Mais conteúdos</TitleMoreContent>
            <ContentCard data={ListBusinessContentCard} pageId={id} />
          </MoreContents>
        </ContentInfo>
      </ContentPage>
      <Footer />
    </Container>
  )
}

export default Antecipation