import React, { Component } from "react";
import { getCandidate, addComment } from "../../services/candidates";
import { getCurrentUser } from "../../services/auth";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import FeedbackForm from "./feedbackForm";
import Comments from "./comments";

class Feedback extends Component {
  state = {
    candidate: { comments: [] },
    user: {},
    comment: { name: "", rating: 0, comment: "" },
  };

  async componentDidMount() {
    const candidate = await getCandidate(this.props.match.params.id);
    const user = getCurrentUser();

    this.setState({ candidate });
    this.setState({ user });
  }

  handleChange = ({ currentTarget: input }) => {
    const comment = { ...this.state.comment };
    comment[input.name] = input.value;
    this.setState({ comment });
  };

  handleSubmit = async (event) => {
    const candidateId = this.props.match.params.id;
    const userId = this.state.user.id;
    const { name, rating, comment } = this.state.comment;
    event.preventDefault();
    await addComment(candidateId, userId, name, rating, comment);
  };

  render() {
    const { candidate, user } = this.state;
    const { name, rating, comment } = this.state.comment;
    return (
      <div
        className="img-background"
        style={{ backgroundImage: `url(${"/colored_pencils.jpg"})` }}
      >
        <span style={{ display: "inline-block" }}>
          <h1>Feedback</h1>
          <table width="100%">
            <tbody>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Specialties</th>
                <th>Presentation</th>
                <th>Rating</th>
              </tr>
              <tr>
                <td>{candidate._id}</td>
                <td>{candidate.name}</td>
                <td>{candidate.specialties}</td>
                <td>{candidate.presentation}</td>
                <td>{candidate.rating}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <br />
            {candidate.comments.length !== 0 ? (
              <Comments candidate={candidate} user={user} />
            ) : (
              ""
            )}
          </div>
          {user ? (
            <div>
              <p>Please give your feedback:</p>
              <FeedbackForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                radioButtons={[1, 2, 3, 4, 5]}
                nameValue={name}
                commentValue={comment}
                radioValue={parseInt(rating)}
              />
            </div>
          ) : (
            ""
          )}
          <Link to="/candidates">Back to candidates</Link>
        </span>
        <ToastContainer />
      </div>
    );
  }
}

export default Feedback;
