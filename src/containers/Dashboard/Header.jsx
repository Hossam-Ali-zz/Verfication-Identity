/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Grid, Button, Segment, Divider, Label } from "semantic-ui-react";

class DashboardHeader extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ textAlign: "left" }}>
          <Button basic>Filter</Button>
        </div>
        <Divider hidden />
        <Grid>
          <Grid.Column width={7}>
            <Segment>
              <h4 className="card-title">Chnage from last 7 days</h4>
              <Grid columns="equal">
                <Grid.Column textAlign="left">
                  <div>
                    <span className="card-number">48</span>
                    <span>Total Authentications </span>
                  </div>
                  <Label style={{ color: "blue" }}>1 new</Label>
                </Grid.Column>
                <Grid.Column textAlign="left">
                  <div>
                    <span className="card-number">62.3%</span>
                    <span>Total Trust Score </span>
                  </div>
                  <Label style={{ color: "blue" }}>-38.5% p.p</Label>
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column width={2} />
          <Grid.Column width={7}>
            <Segment className="right-card">
              <div>
                <Label circular color="green" style={{ marginRight: "5px" }} />
                46 Users need approval
              </div>
              <div>
                <Button color="blue">Start now</Button>
              </div>
            </Segment>
            <Segment className="right-card">
              <div>
                <Label circular color="red" style={{ marginRight: "5px" }} />
                25 Users have a critical score
              </div>
              <div>
                <Button basic>Take action</Button>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default DashboardHeader;
