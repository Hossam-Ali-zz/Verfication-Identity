/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import UserModal from "./UserModal";
import "./Header.css";

class DashboardHeader extends Component {
  state = {
    isModal: false
  };
  handleModal = langValue => {
    this.setState({ isModal: langValue });
  };
  render() {
    return (
      <div className="container">
        <Table singleLine basic="very" striped textAlign="center">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Authenication Document</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>48</Table.Cell>
              <Table.Cell>About 16 hours</Table.Cell>
              <Table.Cell>N/A</Table.Cell>
              <Table.Cell>N/A</Table.Cell>
              <Table.Cell>Berlin, DE</Table.Cell>
              <Table.Cell>Passport</Table.Cell>
              <Table.Cell>24%</Table.Cell>
              <Table.Cell>
                <Button
                  color="blue"
                  onClick={() => this.setState({ isModal: true })}
                >
                  Check now
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        {this.state.isModal && (
          <UserModal openModal handleModal={this.handleModal} />
        )}
      </div>
    );
  }
}
export default DashboardHeader;
