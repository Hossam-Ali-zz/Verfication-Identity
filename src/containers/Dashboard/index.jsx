/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Divider, Dropdown, Icon } from "semantic-ui-react";
import Header from "./Header";
import Table from "./Table";

class Dashboard extends Component {
  render() {
    const trigger = (
      <span>
        <Icon name="user" /> Hi Dave
      </span>
    );

    const options = [{ key: "sign-out", text: "Sign Out" }];

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            borderBottom: "1px solid #dededf",
            paddingBottom: "20px",
            paddingTop: "20px",
            paddingRight: "20px"
          }}
        >
          <Dropdown trigger={trigger} options={options} />
        </div>
        <Divider hidden />
        <Header />
        <Divider hidden section />
        <Table />
      </>
    );
  }
}
export default Dashboard;
