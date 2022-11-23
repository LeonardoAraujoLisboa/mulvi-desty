import React from 'react'
import Menu from '../../components/Menu'
import { Container, ContentPage, ContentTitle, PageTitle, Title, Subtitle, WrapperBanner, ContentBanner, ContentInfo, Date, InfoTitle, InfoText, Divider, MoreContents, TitleMoreContent, Link} from './styles'
import MainMistakesImg from '../../assets/tablet/main-mistakes.png'
import ContentCard from '../../components/ContentCard'
import { ListBusinessContentCard } from '../../utils/lists'
import Footer from '../../components/sections/HomeSections/Footer'
import { useParams } from 'react-router-dom'

const MainMistakes = () => {
  const {id} = useParams()

  return (
    <Container>
      <Menu />
      <ContentPage>
        <ContentTitle>
          <PageTitle>Conteúdos</PageTitle>
          <Title>Saiba os principais erros de quem inicia um empreendimento</Title>
          <Subtitle>Será que você está cometendo um destes principais erros do empreendedor iniciante? </Subtitle>
        </ContentTitle>
        <WrapperBanner>
          <ContentBanner src={MainMistakesImg} alt='Principais erros' />
        </WrapperBanner>
        <ContentInfo>
          <Date>28 de Outubro de 2022</Date>
          <InfoText>Empreendedor é aquele capaz de gerenciar e realizar seus próprios projetos e negócios, concretizado ideias que façam seu empreendimento ter visibilidade e gerar lucros. Essa descoberta de ter um negócio próprio sem a necessidade de um vínculo empregatício está cada vez mais em alta. Mas diversos erros do empreendedor iniciante podem impedir seu crescimento e resultar no fracasso do negócio.</InfoText>
          <InfoText>Neste artigo, reunimos os 10 erros mais comuns relatados pela maior parte dos empreendedores. Entenda como evitá-los para aumentar as chances de sucesso do seu empreendimento.</InfoText>
          <InfoTitle>Querer lucro rápido</InfoTitle>
          <InfoText>Um dos principais objetivos do empreendedor iniciante é concretizar uma ideia que dê lucros. É verdade que o faturamento é essencial para a sobrevivência de qualquer negócio, mas esperar um lucro rápido não é realista.</InfoText>
          <InfoText>Um empreendimento sólido pode demorar muitos meses — e em alguns casos até anos — para gerar um lucro satisfatório. Isso ocorre por diversos motivos. Afinal, você está entrando agora no jogo e o público ainda não conhece seu produto ou serviço.</InfoText>
          <InfoText>É essencial que o empreendedor inicie seu negócio mirando o longo prazo. Isso vai aliviar aquela ansiedade de achar que o empreendimento precisa impactar o mercado logo de início.</InfoText>
          <InfoTitle>Desconhecer seu mercado de atuação</InfoTitle>
          <InfoText>Por melhor que seja sua ideia, boa parte do sucesso do seu empreendimento depende das condições do mercado. E quando falamos em mercado, referimo-nos à concorrência, ao público consumidor, à sazonalidade, aos fornecedores e a muitos outros fatores externos que interferem no seu negócio.</InfoText>
          <InfoText>Um dos grandes erros do empreendedor é iniciar o negócio sem antes fazer uma pesquisa sobre como está seu setor de atuação e as tendências para o futuro. É importante dominar a sua área, conhecendo o que a concorrência está fazendo e de que modo você vai se posicionar no mercado.</InfoText>
          <InfoText>Dentro desse contexto, defina também qual será seu diferencial. Em um campo em que há muitos concorrentes, você não pode fazer mais do mesmo. Sem um diferencial competitivo, sua marca nem é percebida pelo público.</InfoText>
          <InfoTitle>Não definir um propósito para o seu negócio</InfoTitle>
          <InfoText>O propósito de um negócio determina de que maneira ele contribui para a sociedade.<br></br>Quando você entende como sua ideia pode gerar soluções para o problema que as pessoas têm, seu empreendimento passa a ter um valor social — e isso pode ser seu diferencial competitivo.</InfoText>
          <InfoText>Muitos empreendedores, porém, não têm bem claro em seu projeto qual o propósito do negócio. Mas essa definição será essencial para criar uma proximidade com o público e ganhar valor aos olhos dele.</InfoText>
          <InfoTitle>Misturar as finanças pessoais das finanças do negócio é um dos principais erros do empreendedor</InfoTitle>
          <InfoText>Essa é uma falha de quase todo empreendedor. Em muitos casos, a conta pessoal se torna a conta do negócio, e as entradas e saídas da empresa se misturam com os boletos da casa e da família.</InfoText>
          <InfoText>Esse erro gera uma confusão muito grande na gestão financeira da empresa. Fica muito difícil analisar a real situação do negócio. Por isso, um dos primeiros passos ao abrir um empreendimento é abrir uma conta jurídica dedicada às receitas e despesas.</InfoText>
          <InfoTitle>Superestimar os lucros do negócio</InfoTitle>
          <InfoText>Como vimos no início, um dos erros do empreendedor iniciante é esperar lucros rápidos. Mas também é um equívoco esperar que eles venham em grande volume. Esse erro pode ocorrer por diversos motivos.</InfoText>
          <InfoText>Em muitos casos, o empreendedor não sabe fazer o cálculo correto dos custos de produção para precificar corretamente seus produtos na prateleira. Então, a margem de lucro não condiz com a realidade.</InfoText>
          <InfoText>Para determinar os lucros de forma realista, é preciso levar em conta todos os custos do negócio. Isso inclui matéria-prima, fornecedores, despesas fixas, mão de obra e muitos outros.</InfoText>
          <InfoTitle>Atuar na informalidade</InfoTitle>
          <InfoText>Uma empresa só é oficialmente reconhecida após a formalização do negócio por meio do CNPJ. É por meio desse registro que você poderá abrir uma conta bancária jurídica, conquistar crédito para o crescimento do negócio, emitir notas fiscais, entre muitas outras vantagens.</InfoText>
          <InfoText>Além disso, a informalidade pode gerar multas por parte da Receita Federal. Sem falar que não será possível contratar funcionários e, em alguns casos, ganhar vantagens em compras maiores com fornecedores. Lembre-se também que um negócio legalizado gera mais confiança no público.</InfoText>
          <InfoTitle>Ignorar a importância da contabilidade</InfoTitle>
          <InfoText>A abertura e funcionamento de uma empresa envolve muitas burocracias com as quais a maior parte dos empreendedores não estão aptos — ou dispostos — a lidar.<br></br>Assim como no caso da informalidade, quando o negócio deixa de pagar alguns impostos ou seguir algumas normas específicas do setor, ele pode ficar sujeito a multas e sanções judiciais.</InfoText>
          <InfoText>Por isso, ignorar o trabalho da contabilidade é um erro que você não pode cometer. Isso muitas vezes envolve a contratação de um contador. Esse é um custo que vale muito a pena, especialmente no longo prazo.</InfoText>
          <InfoTitle>Não controlar o fluxo de caixa</InfoTitle>
          <InfoText>O fluxo de caixa é um documento em que se registram todas as entradas e saídas de dinheiro do negócio. É por meio dele que você determinará como está a saúde financeira do seu negócio. Assim, fica mais fácil saber se há recursos ou se a empresa está no vermelho.</InfoText>
          <InfoText>A falta desse controle pode fazer o empreendedor gastar mais do que tem em caixa, gerando dívidas e até a falência do negócio. Infelizmente, esse é um erro que muitos novos empresários cometem, comprometendo o capital de giro da empresa, o que pode ser fatal para a sobrevivência do empreendimento.</InfoText>
          <InfoTitle>Escolher mal os sócios</InfoTitle>
          <InfoText>A falta de entendimento entre os sócios também pode resultar no fim do empreendimento. Esse problema pode ocorrer até mesmo com pessoas próximas, como amigos e familiares, que têm uma boa relação afetiva, mas na hora dos negócios, entram em conflito com opiniões e objetivos divergentes.</InfoText>
          <InfoText>Por isso, o ideal é analisar muito bem o perfil das pessoas com que você vai fechar uma sociedade, já que essa é uma relação de longo prazo. Tenha certeza de que os valores e os objetivos estão alinhados.</InfoText>
          <InfoTitle>Não investir em marketing</InfoTitle>
          <InfoText>Por mais inovadora que seja sua ideia, ela não vai se vender sozinha. As estratégias de marketing podem gerar valor e aumentar a visibilidade da sua marca. No entanto, um dos grandes erros do empreendedor iniciante é pensar que o marketing não é necessário.</InfoText>
          <InfoText>Então, não ignore a necessidade de investir na divulgação. Faça um bom planejamento levando em conta o público que deseja alcançar e os canais necessários para isso. O marketing digital é uma ferramenta muito eficiente para alcançar essas pessoas de forma eficiente e rápida.</InfoText>
          <InfoText>Nenhum negócio quando inicia está fadado ao fracasso ou ao sucesso. Muito depende do planejamento inicial realizado, da competência e do comprometimento ao longo da execução do projeto. Mas, ao evitar esses principais erros do empreendedor, as chances de sua ideia dar certo serão muito maiores!</InfoText>
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

export default MainMistakes