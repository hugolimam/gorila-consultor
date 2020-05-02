import React, { useState } from "react";
import Rotas from "./Rotas";
import {
  Route,
  Redirect,
  BrowserRouter,
  Switch,
  RouteProps,
} from "react-router-dom";
import Header from "./components/header";

import Login from "./paginas/login";

function PrivateRoute({ children, ...rest }) {
  const [logado, setLogado] = useState(true);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        logado ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="*">
            <Header />
            <Rotas />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
