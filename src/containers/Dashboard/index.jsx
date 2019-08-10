/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Header from "./Header";

class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}
export default Dashboard;
