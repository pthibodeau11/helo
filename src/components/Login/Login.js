import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Link to="/profile">
          <button>View Profile</button>
        </Link>
        <input placeholder="enter email"></input>
        <input placeholder="enter password"></input>
        <button>Login</button>
      </div>
    );
  }
}
