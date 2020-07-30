import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCandidate, updateComment } from "../../services/candidates";
import { ToastContainer } from "react-toastify";
import FeedbackForm from "./feedbackForm";
import { getCurrentUser } from "./../../services/auth";

class EditComment extends Component {
  state = {
    comment: { name: "", rating: 0, comment: "" },
  };

  async componentDidMount() {
    const user = getCurrentUser();
    if (user) {
      const candidate = await getCandidate(this.props.match.params.id);
      const comment = candidate.comments.find((comment) => {
        return comment.userId === getCurrentUser()._id;
      });

      this.setState({ comment });
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const comment = { ...this.state.comment };
    comment[input.name] = input.value;
    this.setState({ comment });
  };

  handleSubmit = async (event) => {
    const candidateId = this.props.match.params.id;
    const { name, rating, comment } = this.state.comment;
    event.preventDefault();
    await updateComment(candidateId, name, rating, comment);
  };

  render() {
    const { name, rating, comment } = this.state.comment;
    return (
      <div
        className="img-background"
        style={{ backgroundImage: `url(${"/books.jpg"})` }}
      >
        <div className="parent-card" style={{ height: "100vh" }}>
          <div className="card">
            <h1>Edit Comment</h1>
            <FeedbackForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              radioButtons={[1, 2, 3, 4, 5]}
              nameValue={name}
              commentValue={comment}
              radioValue={parseInt(rating)}
            />
            <ToastContainer />
            <Link to={`/feedback/${this.props.match.params.id}`}>
              Back to candidate
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EditComment;
