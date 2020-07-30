import React, { Component } from "react";
import CandidatesTable from "./candidatesTable";
import { getCurrentUser, isVisible } from "../../services/auth";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../common/header";
import "../../CSS/layouts.css";

class Candidates extends Component {
  render() {
    return (
      <div>
        <div
          className="img-background"
          style={{ backgroundImage: `url(${"/candidates.jpg"})` }}
        >
          <div className="parent-card">
            <div className="card">
              <Header />
              <h1>Candidates</h1>
              <CandidatesTable />
              <Link to="/add-candidate" style={isVisible(getCurrentUser())}>
                Add Candidate
              </Link>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Candidates;
