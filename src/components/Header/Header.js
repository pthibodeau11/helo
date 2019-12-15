import React, { Component } from "react";
import Login from "../Login/Login";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>This is the header</h1>
        <Login />
      </div>
    );
  }
}
