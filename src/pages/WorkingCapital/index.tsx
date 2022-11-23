import React from 'react'
import Menu from '../../components/Menu'
import { Container, ContentPage, ContentTitle, PageTitle, Title, Subtitle, WrapperBanner, ContentBanner, ContentInfo, Date, InfoTitle, InfoText, Divider, MoreContents, TitleMoreContent, List, ListItem, Link} from './styles'
import WorkingCapitalImg from '../../assets/tablet/working-capital.png'
import ContentCard from '../../components/ContentCard'
import { ListBusinessContentCard } from '../../utils/lists'
import Footer from '../../components/sections/HomeSections/Footer'
import { useParams } from 'react-router-dom'

const WorkingCapital = () => {
  const {id} = useParams()

  return (
    <Container>
      <Menu />
      <ContentPage>
        <ContentTitle>
          <PageTitle>Conteúdos</PageTitle>
          <Title>Capital de giro: o que é e qual a sua importância?</Title>
          <Subtitle>Você sabe o que é e como calcular seu capital de giro? Entenda a importância dessa reserva!</Subtitle>
        </ContentTitle>
        <WrapperBanner>
          <ContentBanner src={WorkingCapitalImg} alt='Principais erros' />
        </WrapperBanner>
        <ContentInfo>
          <Date>28 de Outubro de 2022</Date>
          <InfoText>Quando falamos em gestão financeira e crescimento do negócio, é natural que o conceito sobre capital de giro surja na discussão. Afinal, essa reserva é fundamental para a segurança financeira de qualquer empresa, e precisa ser calculada e gerenciada de forma adequada.</InfoText>
          <InfoText>Apesar da grande relevância do tema, muitas empresas ainda não têm esse valor bem resolvido na gestão financeira do negócio. E não é raro faltar recursos para as operações do empreendimento.</InfoText>
          <InfoText>Pensando nisso, resolvemos detalhar o assunto. Neste post, você vai entender melhor o que é capital de giro, qual a sua importância e como ele deve ser calculado de forma simples e prática.</InfoText>
          <InfoTitle>O que é capital de giro?</InfoTitle>
          <InfoText>Capital de giro é o montante de dinheiro que sua empresa tem prontamente disponível para arcar com os custos da empresa. Essas despesas estão ligadas às operações do negócio, como contas de consumo, pagamento de fornecedores, folha de pagamentos de funcionários, manutenção de equipamentos, entre outros.</InfoText>
          <InfoText>Essa reserva deve existir independentemente dos lucros do negócio. Normalmente, a maior parte desse dinheiro fica altamente disponível no caixa da empresa. No entanto, ele também pode ficar alocado em investimentos (preferencialmente de alta liquidez), em contas a receber e no estoque.</InfoText>
          <InfoText>O capital de giro garante que a empresa tenha condições financeiras de continuar funcionando, ou seja, que ele “gire”, como sugere o próprio nome.</InfoText>
          <InfoText>Assim, podemos entender o capital de giro basicamente como o ativo circulante, ou seja, a soma de todos os recursos da empresa (bens e direitos) que compõem sua reserva financeira e que podem ser convertidos rapidamente em dinheiro para cobrir seus custos — saldo em conta bancária, investimentos de alta liquidez, estoque, caixa etc.</InfoText>
          <InfoTitle>Quais são os tipos de capital de giro?</InfoTitle>
          <InfoText>O conceito de capital de giro pode ser desdobrado em alguns tipos principais.</InfoText>
          <InfoText style={{fontWeight: 700}}>Capital de giro líquido</InfoText>
          <InfoText>O capital de giro líquido se refere ao total do ativo circulante disponível para a empresa, após terem sido deduzidas todas as despesas (o passivo circulante).</InfoText>
          <InfoText style={{fontWeight: 700}}>Capital de giro bruto</InfoText>
          <InfoText>O capital de giro bruto conta com toda a reserva financeira que a empresa tem disponível sem subtrair o passivo circulante, ou seja, sem contar as despesas.<br></br>Assim, soma-se todo o dinheiro presente no caixa, em contas bancárias, em aplicações financeiras, contas a receber etc. Existe também o ativo não circulante, que se refere a bens e direitos que não podem ser convertidos em dinheiros tão rapidamente, como equipamentos e imóveis.</InfoText>
          <InfoText style={{fontWeight: 700}}>Capital de giro positivo ou negativo</InfoText>
          <InfoText>Nesse tipo de abordagem, considera-se a relação entre as despesas e a reserva:</InfoText>
          <List>
            <ListItem>positivo: a reserva é suficiente para cobrir as despesas;</ListItem>
            <ListItem>negativo: as despesas são maiores que o montante reservado em caixa, o que representa um grave risco financeiro para o negócio.</ListItem>
          </List>
          <InfoText style={{fontWeight: 700}}>Capital de giro permanente</InfoText>
          <InfoText>O capital de giro permanente se refere a um volume mínimo de ativo circulante que o negócio deve ter para que suas operações funcionem de modo estável. Cada empresa terá seu próprio valor definido, pois os custos e as receitas variam de um negócio para outro.</InfoText>
          <InfoText style={{fontWeight: 700}}>Capital de giro variável</InfoText>
          <InfoText>Diferentemente do capital de giro permanente, este tipo pode oscilar de acordo com o que a empresa está precisando no momento. Pode ser que durante algumas fases, a empresa necessite reservar um capital maior especialmente se tiver alguns investimentos, ampliações ou projetos específicos.</InfoText>
          <InfoText style={{fontWeight: 700}}>Capital de giro ligado a investimentos</InfoText>
          <InfoText>Além de despesas convencionais, esse tipo de capital de giro considera os investimentos programados no período. Por exemplo, pode ser necessário fazer uma ampliação ou comprar maquinário — esses gastos são considerados como passivo circulante.</InfoText>
          <InfoTitle style={{fontWeight: 400, fontSize: '24px'}}>Como calcular?</InfoTitle>
          <InfoText>Calcular o capital de giro é bastante simples. Mas ter essa clareza é fundamental para facilitar a sua gestão financeira. O cálculo pode ser dividido em três etapas principais.</InfoText>
          <br></br>
          <InfoText style={{fontWeight: 700}}>1. Some todo seu ativo circulante</InfoText>
          <InfoText>O ativo circulante do seu negócio são aqueles valores que estão mais rapidamente disponíveis, como dinheiro em caixa, na conta bancária, no estoque e nas contas a receber. Então, some todos eles.</InfoText>
          <InfoText>Veja um exemplo prático</InfoText>
          <List>
            <ListItem>nas contas bancárias: R$ 43 mil;</ListItem>
            <ListItem>no estoque: R$ 150 mil;</ListItem>
            <ListItem>no caixa: R$ 10 mil;</ListItem>
            <ListItem>em contas a receber: R$ 80 mil.</ListItem>
          </List>
          <InfoText>Nesse caso, o ativo circulante é igual a R$ 283 mil. Então, vamos para o segundo passo.</InfoText>
          <InfoText style={{fontWeight: 700}}>2. Calcule o passivo circulante</InfoText>
          <InfoText>Agora são todas as despesas do negócio. Some todas elas.</InfoText>
          <br></br>
          <InfoText>Vamos continuar com um exemplo:</InfoText>
          <List>
            <ListItem>folha de pagamentos: R$ 15 mil;</ListItem>
            <ListItem>contas de consumo (internet, água, energia etc.): R$ 8 mil;</ListItem>
            <ListItem>fornecedores: R$ 120 mil;</ListItem>
            <ListItem>aluguel: R$ 5 mil.</ListItem>
          </List>
          <InfoText>Com esses valores, a soma chega a R$ 148 mil de ativo circulante em obrigações que precisam ser pagas ao longo do período.</InfoText>
          <InfoText style={{fontWeight: 700}}>3. Aplique a fórmula</InfoText>
          <InfoText>Para conhecer seu capital de giro líquido, basta aplicar a seguinte fórmula básica:</InfoText>
          <List>
            <ListItem>capital de giro = ativo circulante – passivo circulante.</ListItem>
          </List>
          <br></br>
          <InfoText>Usando os exemplos citados, fica fácil entender o cálculo:</InfoText>
          <List>
            <ListItem>capital de giro = R$ 283 mil – R$ 148 mil;</ListItem>
            <ListItem>capital de giro = R$ 135 mil.</ListItem>
          </List>
          <br></br>
          <InfoText>Então, neste caso, a reserva financeira que o negócio terá para manter seu funcionamento é de R$ 135 mil.</InfoText>
          <br></br>
          <InfoText>Mas qual o valor ideal? O recomendado é que o capital de giro represente de 20% a 100% do valor de todas as despesas.</InfoText>
          <InfoTitle>Qual a importância do capital de giro para o sucesso de um negócio?</InfoTitle>
          <br></br>
          <InfoText>O capital de giro é um indicador importante que informa a saúde financeira do seu negócio. Se essa reserva for inexistente, mesmo conseguindo pagar todas as despesas, seu negócio fica sob risco caso ocorram situações de crise ou surjam oportunidades de investimentos.</InfoText>
          <InfoText>Ter um capital de giro muito elevado também não é uma boa ideia. Isso pode acontecer quando o estoque está muito alto porque os produtos não estão saindo. Então, é necessário encontrar o equilíbrio certo.</InfoText>
          <InfoTitle>Como gerenciar o capital de giro? Confira algumas dicas!</InfoTitle>
          <br></br>
          <InfoText>Separamos algumas dicas que vão ser úteis para você gerenciar seu capital de giro. Veja só!</InfoText>
          <br></br>
          <InfoText style={{fontWeight: 700}}>Mantenha um bom registro e acompanhe</InfoText>
          <InfoText>Após calcular seu capital de giro atual, mantenha sempre tudo registrado e cuide para preservar esse montante. Afinal, de um mês para o outro, as receitas e despesas podem variar. Então, é necessário avaliar as necessidades.</InfoText>
          <br></br>
          <InfoText style={{fontWeight: 700}}>Gerencie com cuidado as contas</InfoText>
          <InfoText>Controlar as datas de pagamento e recebimento pode ser bastante complicado. Então, tente conciliar esses períodos, organizando os pagamentos em datas próximas às datas de recebimento.</InfoText>
          <br></br>
          <InfoText style={{fontWeight: 700}}>Fique de olho na inadimplência</InfoText>
          <InfoText>Todo seu controle não será eficiente se seus clientes não pagarem nas datas previstas. A inadimplência é a grande inimiga do seu capital de giro. Então, não deixe de organizar seus processos de cobrança.</InfoText>
          <InfoText>O capital de giro é uma reserva indispensável para seu negócio. Ele pode contribuir para o crescimento da empresa. Mas precisa ser bem gerenciado e acompanhado de perto.</InfoText>
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

export default WorkingCapital