/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import LeftSide from "./leftSide";
import LoginForm from "./loginForm";
import "./signin.css";

class Signin extends Component {
  render() {
    return (
      <Grid style={{ height: "100%", margin: 0 }}>
        <Grid.Column width={9} style={{ backgroundColor: "blue" }}>
          <LeftSide />
        </Grid.Column>
        <Grid.Column
          width={7}
          style={{ display: "flex", alignItems: "center" }}
        >
          <LoginForm />
        </Grid.Column>
      </Grid>
    );
  }
}
export default Signin;
