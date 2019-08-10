import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import Signin from "../containers/Signin";

const PagesRoutes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Signin} />
    <Route exact path="/dashboard" component={Dashboard} />
  </BrowserRouter>
);

export default PagesRoutes;
