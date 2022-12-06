import React from "react";
import {
  Container,
  Title,
  ContentCards,
  ContentFlags,
  InfoText,
  AllFlags,
} from "./styles";
import BenefitCard from "../../../BenefitCard";
import Flags from "../../../../assets/flags.svg";
import Revenue from "../../../../assets/revenue.svg";
import Account from "../../../../assets/account.svg";
import Attendance from "../../../../assets/attendance.svg";
import AllFlagsCard from "../../../../assets/all-flags-card.png";

const Benefits = () => {
  return (
    <Container id="benefits" className="container-web">
      <Title>
        Vantagens <span className="attention-strong">Mulvi Pay</span>
      </Title>
      <ContentCards>
        <BenefitCard
          text="Aceita as principais bandeiras do mercado"
          icon={Flags}
        />
        <BenefitCard
          text="Ferramentas para aumentar a receita do seu negócio"
          icon={Revenue}
        />
        <BenefitCard text="Conta digital gratuita no Desty" icon={Account} />
        <BenefitCard text="Atendimento Humanizado" icon={Attendance} />
      </ContentCards>
      <ContentFlags>
        <InfoText>
          Principais bandeiras do mercado para melhor atender o seu negócio
        </InfoText>
        <AllFlags src={AllFlagsCard} className="flags-card" />
      </ContentFlags>
    </Container>
  );
};

export default Benefits;
