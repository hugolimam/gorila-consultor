import React, { useState } from "react";
import Photo from "../../../img/img_avatar.png";
import { Card, Table, CardBody, CardTitle, Button } from "reactstrap";

import { TitleLado2, Pic, UserName } from "../styles";

export default function CardCarteira() {
  const [usuarios, setUsuarios] = useState([
    {
      id: 123456,
      nome: "Hugo lima Moura",
      idade: "23",
      tipoInvest: "Agressivo",
    },
    {
      id: 111222,
      nome: "Daniel Gomes",
      idade: "20",
      tipoInvest: "Agressivo",
    },
    {
      id: 222333,
      nome: "Isaque Costa",
      idade: "21",
      tipoInvest: "Agressivo",
    },
  ]);
  return (
    <Card style={{ maxWidth: "90%", margin: "0 auto" }}>
      <CardBody>
        <CardTitle>
          <TitleLado2>LISTA DE CLIENTES</TitleLado2>
        </CardTitle>
        <Table hover>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Tipo de investidor</th>
              <th className="text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <th>
                  <Pic src={Photo} className="mr-3" />
                </th>
                <th>{user.nome}</th>
                <th>{user.idade} Anos</th>
                <th>Investidor {user.tipoInvest}</th>
                <th className="text-right">
                  <Button color="info" className="mr-3">
                    Carteira
                  </Button>
                  <Button color="success">Chat</Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}
