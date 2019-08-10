/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Table, Button, Pagination, Icon, Label } from "semantic-ui-react";
import UserModal from "./UserModal";
import { firestore } from "../../firebase";

class DashboardHeader extends Component {
  state = {
    isModal: false,
    usersData: []
  };
  handleModal = langValue => {
    this.setState({ isModal: langValue });
  };

  componentDidMount() {
    firestore
      .collection("table-data")
      .get()
      .then(data => {
        data.docs.map(doc => {
          const result = doc.data();
          this.setState({
            usersData: [...this.state.usersData, result]
          });
        });
      });
  }

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
            {this.state.usersData &&
              this.state.usersData.map(data => (
                <Table.Row>
                  <Table.Cell>{data.id}</Table.Cell>
                  <Table.Cell>{data.time}</Table.Cell>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>{data.location}</Table.Cell>
                  <Table.Cell>{data.authenicationDocument}</Table.Cell>
                  <Table.Cell>
                    {`${data.score}% `}
                    {data.score < 50 ? (
                      <Label color="red" style={{ marginLeft: "10px" }}>
                        CRITICAL
                      </Label>
                    ) : null}{" "}
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color={data.status === "Approved" ? "white" : "blue"}
                      disabled={data.status === "Check now" ? false : true}
                      onClick={() => this.setState({ isModal: true })}
                    >
                      {data.status}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
        <div className="table-pagination">
          <Pagination
            defaultActivePage={5}
            ellipsisItem={{
              content: <Icon name="ellipsis horizontal" />,
              icon: true
            }}
            firstItem={{
              content: <Icon name="angle double left" />,
              icon: true
            }}
            lastItem={{
              content: <Icon name="angle double right" />,
              icon: true
            }}
            prevItem={{ content: <Icon name="angle left" />, icon: true }}
            nextItem={{ content: <Icon name="angle right" />, icon: true }}
            totalPages={10}
          />
        </div>
        {this.state.isModal && (
          <UserModal openModal handleModal={this.handleModal} />
        )}
      </div>
    );
  }
}
export default DashboardHeader;
