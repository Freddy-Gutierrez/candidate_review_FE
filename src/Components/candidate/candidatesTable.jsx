import React, { Component } from "react";
import { getCurrentUser, isVisible } from "../../services/auth";
import { getCandidates } from "../../services/candidates";
import { Link } from "react-router-dom";
import "../../CSS/candidatesTable.css";

class CandidatesTable extends Component {
  state = { candidates: [], user: {} };

  async componentDidMount() {
    this.setState({ candidates: await getCandidates() });
    this.setState({ user: getCurrentUser() });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Specialties</th>
              <th>Presentation</th>
              <th style={isVisible(this.state.user)}>Operation</th>
            </tr>
          </thead>
          <tbody>
            {this.state.candidates.map((candidate) => {
              return (
                <tr key={candidate._id}>
                  <td>
                    <Link to={`/feedback/${candidate._id}`}>
                      {candidate._id}
                    </Link>
                  </td>
                  <td>{candidate.name}</td>
                  <td>{candidate.specialties}</td>
                  <td>{candidate.presentation}</td>
                  <td style={isVisible(this.state.user)}>
                    <Link to={`/edit-candidate/${candidate._id}`}>
                      {candidate.operation}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CandidatesTable;
