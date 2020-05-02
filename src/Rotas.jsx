import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Main from "./paginas/main";
import Perfil from "./paginas/perfil";
import Consultoria from "./paginas/consultoria";
import Carteira from "./paginas/carteira";

const Rotas = () => (
  <Switch>
    <Redirect exact path="/" to="/login" />
    <Route path="/main" component={Main} />
    <Route path="/carteira" component={Carteira} />
    <Route path="/perfil" component={Perfil} />
    <Route path="/consultoria" component={Consultoria} />
    <Redirect from="*" to="/404" />
  </Switch>
);
export default Rotas;
