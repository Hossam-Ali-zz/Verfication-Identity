/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import Header from "./Header";
import Table from "./Table";

class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />
        <Divider hidden section />
        <Table />
      </>
    );
  }
}
export default Dashboard;
