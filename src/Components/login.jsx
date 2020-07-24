import React, { Component } from "react";
import { getCurrentUser } from "./../services/auth";
import { login } from "../services/auth";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

class Login extends Component {
  state = {
    data: { username: "", password: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (event) => {
    const { username, password } = this.state.data;
    event.preventDefault();
    login(username, password);
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/candidates" />;
    return (
      <div className="row">
        <div className="column-75">
          <img src="/login.jpg" alt="Login" className="img-home" />
        </div>
        <div className="column-25">
          <span className="span-signup">
            <h3>Login</h3>
            <form onSubmit={this.handleSubmit}>
              <p className="p">Username</p>
              <input type="text" name="username" onChange={this.handleChange} />
              <p className="p">Password</p>
              <input
                className="input"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              <p>
                <button type="submit">Login</button>
              </p>
              <p>
                Don't have an account?<Link to="/signup">Sign Up</Link>
              </p>
              <p>
                <Link to="/candidates">Go to candidates</Link>
              </p>
            </form>
            <ToastContainer />
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
