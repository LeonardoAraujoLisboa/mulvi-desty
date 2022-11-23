import React from 'react'
import Menu from '../../components/Menu'
import { Container, ContentPage, ContentTitle, PageTitle, Title, Subtitle, WrapperBanner, ContentBanner, ContentInfo, Date, InfoTitle, InfoText, Divider, MoreContents, TitleMoreContent, List, ListItem, Link} from './styles'
import TicketMedium from '../../assets/medium-ticket.png'
import ContentCard from '../../components/ContentCard'
import { ListBusinessContentCard } from '../../utils/lists'
import Footer from '../../components/sections/HomeSections/Footer'
import { useParams } from 'react-router-dom'

const MediumTicket = () => {
  const {id} = useParams()

  return (
    <Container>
      <Menu />
      <ContentPage>
        <ContentTitle>
          <PageTitle>Conteúdos</PageTitle>
          <Title>Ticket médio: saiba como aumentar ele na sua empresa</Title>
          <Subtitle>O ticket médio indica o valor médio gasto por seus clientes. Mas como aumentar esse valor?</Subtitle>
        </ContentTitle>
        <WrapperBanner>
          <ContentBanner src={TicketMedium} alt='Ticket Médio' />
        </WrapperBanner>
        <ContentInfo>
          <Date>28 de Outubro de 2022</Date>
          <InfoText>Aumentar as vendas é um objetivo constante para empresas de diversos segmentos.<br></br>Uma das estratégias para alcançar isso é incentivar os clientes a comprar mais. Em outras palavras, aumentar o ticket médio. Mas o que isso significa?<br></br>Neste artigo, você vai entender o que é ticket médio, como deve ser calculado e o que fazer para aumentar esse índice. Continue a leitura e saiba mais!</InfoText>
          <InfoTitle>O que é ticket médio?</InfoTitle>
          <InfoText>O ticket médio é um indicador que revela o valor médio que cada cliente gasta na sua empresa. Por meio dessa métrica, a empresa consegue analisar o comportamento dos consumidores. Na prática, quanto maior o ticket médio, maior a quantia gasta.</InfoText>
          <InfoTitle>Como calcular?</InfoTitle>
          <InfoText>O cálculo do ticket médio é simples. Você terá apenas que somar o total do valor faturado em um período específico e dividir pela quantidade de vendas no mesmo período. Esse cálculo pode ser segmentado por canais de vendas, departamento, segmento, canal específico, categoria, entre outros.<br></br>Veja um exemplo prático para entender melhor.</InfoText>
          <InfoText>Considere uma empresa que vende em dois bairros distintos. No bairro 1, os valores foram os seguintes:</InfoText>
          <List>
            <ListItem>800 vendas;</ListItem>
            <ListItem>R$ 350 mil em faturamento;</ListItem>
            <ListItem>ticket médio = R$ 350 mil / 800 = R$ 437,50.</ListItem>
          </List>
          <InfoText>Isso significa, que cada cliente dessa loja gastou em média R$ 437,50. Já no bairro 2, os resultados foram os seguintes:</InfoText>
          <List>
            <ListItem>1500 vendas;</ListItem>
            <ListItem>R$ 600 mil em faturamento;</ListItem>
            <ListItem>ticket médio = R$ 600 mil / 1500 = R$ 400.</ListItem>
          </List>
          <InfoText>Apesar de ter um faturamento maior e apresentar mais vendas, o ticket médio foi menor no bairro 2 do que no bairro 1. Esse mesmo tipo de cálculo pode ser feito por produtos específicos, por vendedores, categorias etc. Mas em que esses resultados podem ser de ajuda para a empresa? Entenda essa importância.</InfoText>
          <InfoTitle>Por que o ticket médio é importante?</InfoTitle>
          <InfoText>O cálculo do ticket médio pode gerar muitos insights importantes para a empresa. Por meio dele, é possível identificar:</InfoText>
          <List>
            <ListItem>o comportamento do consumidor, gerando informações importantes sobre possíveis promoções, precificação e outras ações;</ListItem>
            <ListItem>a eficácia de algum investimento em ações promocionais. Ao comparar o ticket médio de diferentes períodos, é possível determinar se a campanha conseguiu elevar o valor médio de compra dos clientes;</ListItem>
            <ListItem>prioridades de investimentos;</ListItem>
            <ListItem>oportunidades para ações estratégicas em áreas ou regiões específicas.</ListItem>
          </List>
          <InfoText>Com as informações geradas pelo cálculo do ticket médio, as possibilidades de estratégias são muitas. Mas, ao detectar que o ticket médio está aquém do desejado, o que pode ser feito para elevar o índice? Veja algumas dicas.</InfoText>
          <InfoTitle>Como aumentar?</InfoTitle>
          <InfoText>Aumentar o ticket médio significa aumentar o faturamento. Por isso, é tão importante ter esse objetivo. Lembre-se que esse incremento representa quanto, em média, os clientes gastam com produtos e serviços de sua empresa. Por isso, as estratégias de aumento do ticket médio baseiam-se na ideia de fazer cada cliente gastar mais. Saiba como!</InfoText>
          <InfoTitle>Diversifique e facilite os meios de pagamento</InfoTitle>
          <InfoText>Se o pagamento for facilitado, é mais provável que o cliente gaste mais. E uma das principais formas de dar esse incentivo é por diversificar os meios de pagamento. Somente em 2021, as compras com cartões cresceram 33%. O cartão de crédito puxou esse avanço com 36,6% de aumento.</InfoText>
          <InfoText>Isso significa que, se você fornecer a opção do crédito e facilitar com boas condições de pagamento, o cliente terá condições de fazer compras de maior valor, aumentando o ticket médio por consequência.</InfoText>
          <InfoText>Com as informações de métodos de pagamento e parcelamento realizados em sua empresa, você também pode fazer campanhas que envolvam este tema, como por exemplo pedidos acima de R$600 com parcelamento em até 6x, caso você ainda não oferte essa opção.</InfoText>
          <InfoTitle>Monte kits e combos de produtos</InfoTitle>
          <InfoText>Uma boa prática é agrupar produtos relacionados para formar combos com preços mais atraentes. Assim, em vez de levar um único item, o cliente se sente motivado a comprar outros produtos para aproveitar a promoção.</InfoText>
          <InfoText>Um exemplo clássico disso são os kits com xampu, condicionador e hidratante capilar. Dessa forma, o cliente compra o combo com preço menor do que se fosse comprar cada um separadamente.</InfoText>
          <InfoTitle>Adote técnicas de cross selling e up selling</InfoTitle>
          <InfoText>Essas suas estratégias têm um grande potencial de aumentar o faturamento por incentivar o cliente a comprar mais durante a venda. O cross selling (venda cruzada) é a prática de oferecer um serviço ou produto complementar ao que o cliente está comprando. A loja pode oferecer um fone de ouvido para um consumidor que comprou um smartphone, por exemplo.</InfoText>
          <InfoText>Já no up selling, a ideia é fazer um upgrade no produto comprado por um valor a mais. É o caso de um serviço de assinatura que aumenta os recursos para pagar um plano mais caro. Ou então oferecer um dispositivo mais potente por um valor a mais.</InfoText>
          <InfoText>Crie benefícios para clientes que compram acima de um valor específico</InfoText>
          <InfoText>Uma dica que funciona bastante para aumentar o ticket médio é dar vantagens em compras acima de um limite mínimo. Por exemplo, no e-commerce é muito comum oferecer fretes grátis para clientes que pagam mais. Assim, o consumidor fica tentado a adicionar itens no carrinho para usufruir do benefício.</InfoText>
          <InfoText>Outros benefícios podem incluir:</InfoText>
          <List>
            <ListItem>descontos progressivos;</ListItem>
            <ListItem>brindes;</ListItem>
            <ListItem>vantagens em próximas compras.</ListItem>
          </List>
          <InfoTitle>Fortaleça sua marca no mercado</InfoTitle>
          <InfoText>Um dos fatores que podem determinar o valor que os clientes estão dispostos a gastar no seu negócio é a credibilidade da sua empresa no mercado. Muitos consumidores não se arriscam a fazer compras altas com empresas que não conhecem bem ou sobre as quais não há boas indicações.</InfoText>
          <InfoText>Nesse quesito, o ideal é investir em uma marca forte no mercado. O segredo está não somente na qualidade dos produtos e serviços fornecidos, mas também na comunicação da empresa com o público.</InfoText>
          <InfoText>Divulgue os feedbacks dados pelos clientes, invista em um atendimento de qualidade e em uma experiência de compra encantadora, e conquiste selos de confiança próprios do seu segmento. Com a credibilidade em alta, os clientes se sentirão mais confiantes para gastar mais.</InfoText>
          <InfoTitle>Use os resultados do cálculo do ticket médio</InfoTitle>
          <InfoText>Como já mencionado, o cálculo do ticket médio também pode ser usado para avaliar o sucesso de uma campanha de marketing. Assim, com a avaliação certa, é possível fazer ajustes com base nos resultados já obtidos. Avalie o que já deu certo e o que precisa ser aprimorado para as próximas campanhas.</InfoText>
          <InfoText>O ticket médio é uma métrica importante que gera informações valiosas para as estratégias do negócio. Além disso, investir em estratégias para aumentar esse valor pode representar um grande incremento no faturamento da empresa.</InfoText>
          <InfoText>O ticket médio é uma métrica importante que gera informações valiosas para as estratégias do negócio. Além disso, investir em estratégias para aumentar esse valor pode representar um grande incremento no faturamento da empresa.</InfoText>
          <InfoText>Neste artigo, você aprendeu mais sobre ticket médio. Que tal ficar por dentro de outros temas para a gestão do seu negócio?</InfoText>
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

export default MediumTicket