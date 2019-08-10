/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Image, Divider } from "semantic-ui-react";
import check from "./checkmark_white.png";
import "./signin.css";

class RightSide extends Component {
  render() {
    return (
      <div className="right-side-div">
        <div className="checks">
          <Image src={check} className="check-image" />
          Bank-level Security
        </div>
        <Divider hidden />
        <div className="checks">
          <Image src={check} className="check-image" />
          No Credit Card requried
        </div>
        <Divider hidden />
        <div className="checks">
          <Image src={check} className="check-image" />
          GDPR compliant
        </div>
      </div>
    );
  }
}
export default RightSide;
