import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import CadastroForm from "./components/CadastroForm";

import gorila from "../../img/logo.svg";

import { Container, ContainerInput, Logo } from "./styles";

export default function Login() {
  const [estado, setEstado] = useState(true);
  return (
    <Container>
      <ContainerInput>
        <Logo src={gorila} />
        {estado ? (
          <LoginForm estado={setEstado} />
        ) : (
          <CadastroForm estado={setEstado} />
        )}
      </ContainerInput>
    </Container>
  );
}
