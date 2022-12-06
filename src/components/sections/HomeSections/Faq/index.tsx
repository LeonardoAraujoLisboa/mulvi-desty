import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Container, Title } from "./styles";

const Faq = () => {
  const [open, setOpen] = useState<string>("1");

  const handleToggle = (id: string) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <Container id="faq">
      <Title className="attention-strong">Perguntas Frequentes</Title>
      {
        //@ts-ignore
        <Accordion open={open} toggle={handleToggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">
              Quem pode ter as soluções Mulvi Pay?
            </AccordionHeader>
            <AccordionBody accordionId="1">
              Pessoa Jurídica ou Pessoa Física podem se cadastrar em nossas
              soluções. Tenha em mãos seus dados cadastrais e faça sua
              solicitação no site.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">
              Como faço o meu cadastro na Mulvi Pay?
            </AccordionHeader>
            <AccordionBody accordionId="2">
              Fazer parte da Mulvi Pay é muito simples, um cadastro rápido sem
              burocracia. Acesse nosso site, clique em “Quero ser Mulvi” e faça
              a sua solicitação.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">
              Em quanto tempo é feita a análise do meu cadastro?
            </AccordionHeader>
            <AccordionBody accordionId="3">
              Nossa solução é focada em trazer você para perto em até 24 horas.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">
              Em quanto tempo receberei o valor das minhas vendas?
            </AccordionHeader>
            <AccordionBody accordionId="4">
              Suas vendas estarão disponíveis em sua conta no prazo escolhido
              por você.<br></br>No plano acelerado pagamos em 1 dia útil, seja
              no débito, crédito, à vista ou parcelado, após a venda. Ou se
              preferir pode escolher o plano comum que receberá a cada 30 dias.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">
              Como receberei o valor das minhas vendas?
            </AccordionHeader>
            <AccordionBody accordionId="5">
              Os valores serão transferidos automaticamente para sua conta
              bancária, sem cobrança de taxa de transferência.<br></br>Se você é
              PJ receberá em conta corrente vinculada ao CNPJ. Já PF poderá
              escolher receber em conta corrente ou conta poupança vinculada ao
              CPF.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">
              Quais são os canais de atendimento da Mulvi Pay?
            </AccordionHeader>
            <AccordionBody accordionId="6">
              Chat - um canal disponível no APP ou Portal ideal para tirar suas
              dúvidas, o atendimento funciona segunda a sexta e também aos
              sábados.<br></br>- E-mail - você também pode conversar com a gente
              enviando um e-mail para relacionamento@mulvi.com.br.<br></br>-
              Central de atendimento - Nossos atendentes estão prontos para
              ajudar você no que for preciso. Basta ligar para 4002-2360
              capitais ou regiões metropolitanas, ou 0800 021 7100 demais
              localidades.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="7">
              Como funciona a conexão da maquininha Mulvi Pay?
            </AccordionHeader>
            <AccordionBody accordionId="7">
              No cadastro você já pode escolher o chip entre as operadoras VIVO
              e TIM.<br></br>Além disso, nossa maquininha também se conecta
              através de uma rede Wi-Fi.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="8">
              Qual a vantagem de ter uma conta Desty?
            </AccordionHeader>
            <AccordionBody accordionId="8">
              Além de ser uma conta digital gratuita, você conta com 10% de
              desconto nas taxas no débito e crédito.<br></br>*Exclusiva para
              pessoa física, em breve para pessoa jurídica.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      }
    </Container>
  );
};

export default Faq;
