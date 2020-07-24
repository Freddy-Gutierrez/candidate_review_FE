import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "./../../services/auth";
class Header extends Component {
  state = { user: {} };

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  signout = () => {
    logout();
  };

  isRoot = () => {
    return (
      window.location.pathname === "/login" ||
      window.location.pathname === "/signup"
    );
  };

  render() {
    const { user } = this.state;
    return (
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        {user ? (
          <div>
            <h4 style={{ float: "left" }}>{`Welcome ${user.username}`} </h4>
            <Link
              to="/signup"
              style={{ float: "right" }}
              onClick={this.signout}
            >
              Sign Out
            </Link>
            <br></br>
          </div>
        ) : (
          <div>
            {this.isRoot() ? (
              ""
            ) : (
              <p>
                <Link
                  to="/signup"
                  style={{ float: "right", paddingRight: "20px" }}
                >
                  Sign Up
                </Link>
              </p>
            )}
          </div>
        )}
        <br />
      </div>
    );
  }
}

export default Header;
