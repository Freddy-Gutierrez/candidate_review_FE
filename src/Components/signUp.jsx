import React, { Component } from "react";
import { getCurrentUser } from "./../services/auth";
import { signUp } from "../services/auth";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

class SignUp extends Component {
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
    signUp(username, password);
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/candidates" />;
    return (
      <div className="parent-home">
        <div className="sidebar">
          <img src="/login.jpg" alt="Login" className="img-home" />
        </div>
        <div className="content">
          <span className="span-signup">
            <h3>Sign Up</h3>
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
                <button type="submit">Sign Up</button>
              </p>
              <p>
                Already have an account?<Link to="/login">Login</Link>
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

export default SignUp;
