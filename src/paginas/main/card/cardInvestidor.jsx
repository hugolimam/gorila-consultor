import Photo from "../../../img/img_avatar.png";
import { Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import React from "react";

import {
  TitleConsoltor,
  Center,
  ConsultorImg,
  Description,
  Detail,
} from "../styles";

export default function CInvestidor() {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">
          <TitleConsoltor>MEU CONSULTOR</TitleConsoltor>
        </CardTitle>
      </CardBody>
      <CardBody>
        <Center>
          <ConsultorImg src={Photo} />
        </Center>
        <h3 className="text-center">Thiago Nigro</h3>
        <Detail className="text-center">Consultor ha 19 anos</Detail>
        <Description className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Description>
      </CardBody>
      <CardBody>
        <Row form>
          <Col md={6}>
            <Button block color="info">
              + INFO
            </Button>
          </Col>
          <Col md={6}>
            <Button block color="success">
              CHAT
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
