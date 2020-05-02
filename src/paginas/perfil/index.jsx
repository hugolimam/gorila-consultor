import React from "react";
import { Row, Col } from "reactstrap";

import CardPessoal from "./card/CardPessoal";
import CardInvestidor from "./card/CardInvestidor";

import { Container } from "./styles";

export default function Perfil() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <CardPessoal />
        </Col>
        <Col md={8}>
          <CardInvestidor />
        </Col>
      </Row>
    </Container>
  );
}
