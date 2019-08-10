/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import {
  Modal,
  Progress,
  Grid,
  Tab,
  Button,
  Header,
  Label,
  List,
  Image,
  Icon,
  Divider
} from "semantic-ui-react";
import usFlag from "./us-flag.png";
import id from "./id_document.png";
import personVideo from "./person_video.mp4";

class UserModal extends Component {
  render() {
    const panes = [
      {
        menuItem: "SUMMARY",
        render: () => (
          <>
            <Grid>
              <Grid.Column width={2}>
                <Header as="h1">24%</Header>
                TOTAL SCORE
              </Grid.Column>
              <Grid.Column width={6}>
                <span>Facematch Factor</span>
                <Progress percent={15} color="blue" />
                <div>
                  <div>
                    <span style={{ marginRight: "30px" }}>
                      ID Authenticity Factory
                    </span>
                    <Label>Premium</Label>
                  </div>
                  <Progress percent={10} color="blue" />
                </div>
              </Grid.Column>
              <Grid.Column width={2} />
              <Grid.Column width={6}>
                <span>Facematch Factor</span>
                <Progress percent={15} color="blue" />
                <span>ID Authenticity Factory</span>
                <Progress percent={10} color="blue" />
              </Grid.Column>
            </Grid>
            <List
              horizontal
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <List.Item as="a">
                <Label as="a" image>
                  <div
                    style={{
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      src={usFlag}
                      circular
                      style={{ width: "30px", height: "30px" }}
                    />
                    <span style={{ color: "black", fontWeight: "400" }}>
                      United States
                    </span>
                  </div>
                </Label>
              </List.Item>
              <List.Item as="a">
                <Icon name="check circle" /> Age over 18
              </List.Item>
              <List.Item as="a">
                <Icon name="check circle" /> ID not expired
              </List.Item>
              <List.Item as="a">
                <Icon name="check circle" /> Valid Document
              </List.Item>
              <List.Item as="a">
                <Icon name="check circle" /> Background clean
              </List.Item>
            </List>
            <Divider hidden section />
            <Grid columns="equal">
              <Grid.Column>
                SELIFE VIDEO
                <video loop autoPlay>
                  <source src={personVideo} type="video/mp4" />
                  Your browser does not support the video tag. I suggest you
                  upgrade your browser.
                </video>
              </Grid.Column>
              <Grid.Column>
                GOVERNMENT ID
                <Image src={id} />
              </Grid.Column>
            </Grid>
            <Divider hidden />
            <div style={{ margin: "0 auto" }}>
              <Button basic>Reject</Button>
              <Button color="violet">Approve</Button>
            </div>
          </>
        )
      },
      {
        menuItem: "DATA POINTS",
        render: () => <Tab.Pane>DATA POINTS Content</Tab.Pane>
      },
      {
        menuItem: "HISTORY",
        render: () => <Tab.Pane>HISTORY Content</Tab.Pane>
      }
    ];

    return (
      <div className="container">
        <Modal
          defaultOpen={this.props.openModal}
          closeIcon
          size="fullscreen"
          onClose={() => this.props.handleModal(false)}
        >
          <Modal.Content>
            <Tab
              menu={{ fluid: true, vertical: true, tabular: true }}
              panes={panes}
            />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
export default UserModal;
