import React from "react";
import { Col, Row } from "reactstrap";
import ListaClientes from "./card/ListaClientes";

import { Container } from "./styles";
export default function Main() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <ListaClientes />
        </Col>
      </Row>
    </Container>
  );
}
