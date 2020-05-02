import React from "react";
import { Card, Row, Col, CardBody, CardTitle } from "reactstrap";

import {
  TitleLado2,
  Card1,
  Card2,
  Card3,
  Card4,
  TitleCard,
  ValueCard,
} from "../styles";

export default function CardCarteira() {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <TitleLado2>MINHA CARTEIRA</TitleLado2>
        </CardTitle>
        <Row>
          <Col md={3}>
            <Card1>
              <TitleCard>Disponivel para investir</TitleCard>
              <ValueCard>R$ 1.000,00</ValueCard>
            </Card1>
          </Col>
          <Col md={3}>
            <Card2>
              <TitleCard>Você investiu</TitleCard>
              <ValueCard>R$ 1.000.000,00</ValueCard>
            </Card2>
          </Col>
          <Col md={3}>
            <Card3>
              <TitleCard>Seu dinheiro rendeu</TitleCard>
              <ValueCard>R$ 1.000,00</ValueCard>
            </Card3>
          </Col>
          <Col md={3}>
            <Card4>
              <TitleCard>Total de ativos</TitleCard>
              <ValueCard>R$ 1.001.000,00</ValueCard>
            </Card4>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
