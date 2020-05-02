import React from "react";

import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { FormGroup, Label, Input, Button } from "reactstrap";

import { Options } from "../styles";
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

export default function LoginForm({ estado }) {
  return (
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit, submitting, form }) => (
        <>
          <Field
            name="email"
            label="Email ou Usuário"
            component={FieldInput}
            validate={required}
          />
          <Field
            name="senha"
            label="Senha"
            component={FieldInput}
            validate={required}
          />
          <Link to="/main">
            <Button color="primary">Entrar</Button>
          </Link>
          <Options>
            <Button className="text-left" color="link">
              Esqueci minha senha
            </Button>
            <Button
              className="text-right"
              color="link"
              onClick={() => estado(false)}
            >
              Cadastre-se
            </Button>
          </Options>
        </>
      )}
    />
  );
}
