import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../img/logo.svg";
import { Collapse, Navbar, NavbarToggler, Nav, Button } from "reactstrap";
import {
  FaWallet,
  FaChartLine,
  FaUser,
  FaPowerOff,
  FaHome,
} from "react-icons/fa";

import { Container, RightSide, LeftSide, Logo, Navegar } from "./styles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      <LeftSide>
        <Logo src={LogoImg} />
      </LeftSide>
      <RightSide>
        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Navegar to="/main" tag={Link}>
                <FaHome className="mr-md-2" /> Início
              </Navegar>
              <Navegar to="/perfil" tag={Link}>
                <FaUser className="mr-md-2" /> Perfil
              </Navegar>
              <Navegar to="/carteira" tag={Link}>
                <FaWallet className="mr-md-2" /> Minha Carteira
              </Navegar>
              <Navegar to="/consultoria" tag={Link}>
                <FaChartLine className="mr-md-2" /> Consultorias
              </Navegar>
              <Link to="/login">
                <Button outline size="sm" color="danger">
                  <FaPowerOff /> Sair
                </Button>
              </Link>
            </Nav>
          </Collapse>
        </Navbar>
      </RightSide>
    </Container>
  );
}
