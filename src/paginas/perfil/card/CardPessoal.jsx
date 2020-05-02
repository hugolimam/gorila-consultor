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

export default function CardPessoal() {
  const [editar, setEditar] = useState(false);
  return (
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit, submitting, form }) => (
        <Card>
          <CardBody>
            <TitleCards>
              Perfil Pessoal
              <p>Preencha com suas infomações pessoais</p>
            </TitleCards>
            <FormContainer>
              <Row form>
                <Col md={12}>
                  <Field
                    name="nome"
                    label="Nome"
                    component={FieldInput}
                    disabled={!editar}
                    validate={required}
                  />
                </Col>
                <Col md={12}>
                  <Field
                    name="email"
                    label="Email"
                    component={FieldInput}
                    disabled={!editar}
                    validate={required}
                  />
                </Col>
                <Col md={6}>
                  <Field
                    name="contato"
                    label="Numero de Contato"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
                <Col md={6}>
                  <Field
                    type="date"
                    name="nascimento"
                    label="Data de Nasimento"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
                <Col md={4}>
                  <Field
                    name="sexo"
                    label="Sexo"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
                <Col md={8}>
                  <Field
                    name="cpf"
                    label="CPF"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
                <Col md={9}>
                  <Field
                    name="endereco"
                    label="Endereço"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
                <Col md={3}>
                  <Field
                    name="cep"
                    label="CEP"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
                <Col md={3}>
                  <Field
                    name="numero"
                    label="Numero"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
                <Col md={6}>
                  <Field
                    name="cidade"
                    label="Cidade"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
                <Col md={3}>
                  <Field
                    name="estado"
                    label="Estado"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
                <Col md={12}>
                  <Field
                    name="complemento"
                    label="Complemento"
                    component={FieldInput}
                    disabled={!editar}
                  />
                </Col>
              </Row>
            </FormContainer>
          </CardBody>
          <CardBody>
            <FormContainer>
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
      )}
    />
  );
}
