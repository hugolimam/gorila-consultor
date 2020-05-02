import React from "react";
import { Row, Col } from "reactstrap";

import MeuPerfil from "./card/MeuPerfil";

import { Container } from "./styles";

export default function Perfil() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <MeuPerfil />
        </Col>
      </Row>
    </Container>
  );
}
