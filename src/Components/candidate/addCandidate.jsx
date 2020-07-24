import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { addCandidate } from "../../services/candidates";
import Table from "../common/table";

class AddCandidate extends Component {
  state = {
    data: { name: "", specialties: "", presentation: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (event) => {
    const { name, specialties, presentation } = this.state.data;
    event.preventDefault();
    addCandidate(name, specialties, presentation);
  };

  render() {
    const { name, specialties, presentation } = this.state.data;
    return (
      <div
        className="img-background"
        style={{ backgroundImage: `url(${"/lockers.jpg"})` }}
      >
        <span className="span-container">
          <h1>Add Candidate</h1>
          <Table
            inputs={["Name", "Specialties", "Presentation"]}
            values={[name, specialties, presentation]}
            action="Add"
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
          <ToastContainer />
          <Link to="/candidates">Back to candidates</Link>
        </span>
      </div>
    );
  }
}
export default AddCandidate;
