import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCandidate, editCandidate } from "../../services/candidates";
import Table from "../common/table";
import { ToastContainer } from "react-toastify";

class EditCandidate extends Component {
  state = {
    candidate: { _id: "", name: "", specialties: "", presentation: "" },
  };

  async componentDidMount() {
    let candidate = await getCandidate(this.props.match.params.id);
    this.setState({ candidate });
  }

  handleChange = ({ currentTarget: input }) => {
    const candidate = { ...this.state.candidate };
    candidate[input.name] = input.value;
    this.setState({ candidate });
  };

  handleSubmit = async (event) => {
    const { _id, name, specialties, presentation } = this.state.candidate;
    event.preventDefault();
    await editCandidate(_id, name, specialties, presentation);
  };

  render() {
    const { _id, name, specialties, presentation } = this.state.candidate;
    return (
      <div
        className="img-background"
        style={{ backgroundImage: `url(${"/paint_brush.jpg"})` }}
      >
        <span className="span-container">
          <h1>Edit Candidate</h1>
          <Table
            inputs={["ID", "Name", "Specialties", "Presentation"]}
            values={[_id, name, specialties, presentation]}
            action="Save"
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

export default EditCandidate;
