import React, { Component } from "react";
import { Input, Label, Menu } from "semantic-ui-react";

export default class SideBar extends Component {
  state = { activeItem: "dashboard" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        vertical
        borderless
        style={{
          textAlign: "left",
          position: "fixed",
          height: "100%",
          marginTop: "59px"
        }}
      >
        <Menu.Item
          name="dashboard"
          style={{
            fontWeight: activeItem === "dashboard" ? "bolder" : "500"
          }}
          onClick={this.handleItemClick}
        >
          <Label style={{ backgroundColor: "#e8e4da" }}>
            <span style={{ color: "blue" }}> 1</span>
          </Label>
          Dashboard
        </Menu.Item>

        <Menu.Item
          name="documentation"
          style={{
            fontWeight: activeItem === "documentation" ? "bolder" : "500"
          }}
          onClick={this.handleItemClick}
        >
          Documentation
        </Menu.Item>

        <Menu.Item
          name="analytics"
          style={{
            fontWeight: activeItem === "analytics" ? "bolder" : "500"
          }}
          onClick={this.handleItemClick}
        >
          Analytics
        </Menu.Item>

        <Menu.Item
          name="settings"
          style={{
            fontWeight: activeItem === "settings" ? "bolder" : "500"
          }}
          onClick={this.handleItemClick}
        >
          Settings
        </Menu.Item>
      </Menu>
    );
  }
}
