/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import RightSide from "./rightSide";
import LoginForm from "./loginForm";
import "./signin.css";

class Signin extends Component {
  render() {
    return (
      <>
        <Grid style={{ height: "100%" }}>
          <Grid.Column width={9} style={{ backgroundColor: "blue" }}>
            <RightSide />
          </Grid.Column>
          <Grid.Column
            width={7}
            style={{ display: "flex", alignItems: "center" }}
          >
            <LoginForm />
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
export default Signin;
