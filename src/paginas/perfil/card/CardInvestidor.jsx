import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Form, Field } from "react-final-form";

import { TitleCards, FormContainer } from "../styles";

export function FieldInput({ label, input, meta, ...rest }) {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input {...input} {...rest} type={input.type} />
      {meta.error && meta.touched && (
        <span style={{ color: "#9e3131" }}>{meta.error}</span>
      )}
    </FormGroup>
  );
}
const required = (value) => (value ? undefined : "Campo obrigatório");

export default function CardInvestidor() {
  const [editar, setEditar] = useState(false);

  return (
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit, submitting, form }) => (
        <>
          <Card className="mb-3">
            <CardBody>
              <TitleCards>
                Perfil de Investidor
                <p>
                  Com essas informações o conultor pode definir seu perfil de
                  investidor e te guiar da melhor maneira para que seu dinheiro
                  possa render e você possa atingir seus objetivos.
                </p>
              </TitleCards>
              <FormContainer>
                <Row form>
                  <Col md={4}>
                    <Field
                      name="question1"
                      label="Quanto você tem disponivel para investir?"
                      component={FieldInput}
                      disabled={!editar}
                    />
                  </Col>
                  <Col md={12}>
                    <Field
                      name="question2"
                      label="O que você acha que descreve melhor a sua visão sobre investimento?"
                      component={FieldInput}
                      disabled={!editar}
                    />
                  </Col>
                  <Col md={12}>
                    <Field
                      name="question3"
                      label="O que acha que melhor descreve suas finanças pessoais atuais?"
                      component={FieldInput}
                      disabled={!editar}
                    />
                  </Col>
                </Row>
              </FormContainer>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <TitleCards>
                Vida Financeira
                <p>
                  Com essas informações o conultor pode te guiar da melhor
                  maneira de onde, como e quanddo você deve investir seu
                  dinheiro para atingir seus objetivos.
                </p>
              </TitleCards>
              <FormContainer>
                <Row form>
                  <Col md={3}>
                    <Field
                      name="salario"
                      label="Salario"
                      component={FieldInput}
                      disabled={!editar}
                    />
                  </Col>
                  <Col md={3}>
                    <Field
                      name="gasto"
                      label="Gasto fixo mensal"
                      component={FieldInput}
                      disabled={!editar}
                    />
                  </Col>
                  <Col md={3}>
                    <Field
                      name="extra"
                      label="Renda extra?"
                      component={FieldInput}
                      disabled={!editar}
                    />
                  </Col>
                  <Col md={3}>
                    <Field
                      name="quanto"
                      label="Quanto você pode investir por mês?"
                      component={FieldInput}
                      disabled={!editar}
                    />
                  </Col>
                  <Col md={12}>
                    <Field
                      rows="2"
                      type="textarea"
                      name="motivo"
                      label="O que te motiva investir?"
                      component={FieldInput}
                      disabled={!editar}
                    />
                  </Col>
                </Row>
                {editar ? (
                  <>
                    <Button color="danger" onClick={() => setEditar(false)}>
                      Cancelar
                    </Button>
                    <Button className="ml-2" color="success">
                      Salvar
                    </Button>
                  </>
                ) : (
                  <Button color="info" onClick={() => setEditar(true)}>
                    Editar
                  </Button>
                )}
              </FormContainer>
            </CardBody>
          </Card>
        </>
      )}
    />
  );
}
