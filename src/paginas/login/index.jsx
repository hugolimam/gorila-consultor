import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

import gorila from "../../img/logo.svg";

import { Container, ContainerInput, Logo } from "./styles";

export default function Login() {
  const [estado, setEstado] = useState(true);
  return (
    <Container>
      <ContainerInput>
        <Logo src={gorila} />
        <LoginForm estado={setEstado} />
      </ContainerInput>
    </Container>
  );
}
