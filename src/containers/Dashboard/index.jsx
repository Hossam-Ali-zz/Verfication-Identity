/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Divider, Dropdown, Icon } from "semantic-ui-react";
import Header from "./Header";
import Table from "./Table";
import "./Dashboard.css";

class Dashboard extends Component {
  handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };
  render() {
    const trigger = (
      <span>
        <Icon name="user" /> Hi Hossam
      </span>
    );

    return (
      <>
        <div className="user-avatar">
          <Dropdown trigger={trigger}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.handleLogout}>
                <span>Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
