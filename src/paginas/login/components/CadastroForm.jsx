import React from "react";

import { Form, Field } from "react-final-form";
import { FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

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

export default function CadastroForm({ estado }) {
  return (
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit, submitting, form }) => (
        <Row form>
          <Col md={6}>
            <Field
              name="nome"
              label="Nome Completo"
              component={FieldInput}
              validate={required}
            />
          </Col>
          <Col md={6}>
            <Field
              name="email"
              label="Email"
              component={FieldInput}
              validate={required}
            />
          </Col>
          <Col md={4}>
            <Field
              name="contato"
              label="Numero de contato"
              component={FieldInput}
              validate={required}
            />
          </Col>
          <Col md={4}>
            <Field
              type="date"
              name="nascimento"
              label="Data de Nascimento"
              component={FieldInput}
              validate={required}
            />
          </Col>
          <Col md={4}>
            <Field
              name="sexo"
              label="Sexo"
              component={FieldInput}
              validate={required}
            />
          </Col>
          <Col md={6}>
            <Field
              name="senha"
              label="Senha"
              component={FieldInput}
              validate={required}
            />
          </Col>
          <Col md={6}>
            <Field
              name="senhaConfirm"
              label="Confirme sua senha"
              component={FieldInput}
              validate={required}
            />
          </Col>
          <Button color="success">Cadastrar</Button>
          <Button color="link" onClick={() => estado(true)}>
            Já possuo cadastro!
          </Button>
        </Row>
      )}
    />
  );
}
