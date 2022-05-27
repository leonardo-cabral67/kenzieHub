import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

import { Register } from "../pages/Register";
import { useState, useEffect } from "react";
import { Testes } from "../components/Teste";

export const Routes = () => {
  const [authenticated, setAuthenticates] = useState(
    window.localStorage.getItem("@kenzieHub:token")
  );

  useEffect(() => {}, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/home/:id">
        <Home />
      </Route>
      <Route exact path="/teste">
        <Testes />
      </Route>
    </Switch>
  );
};
