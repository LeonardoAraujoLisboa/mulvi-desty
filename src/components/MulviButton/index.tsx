import React from "react";
import { Container, Button } from "./styles";

const MulviButton = ({ ...rest }) => {
  return (
    <Container className="btn-mulvi" {...rest}>
      <Button
        href="https://app.mulvipay.com.br/PortalLojista3/querosercliente"
        target={"_blank"}
      >
        Quero ser mulvi
      </Button>
    </Container>
  );
};

export default MulviButton;
