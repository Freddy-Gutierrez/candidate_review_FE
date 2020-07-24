import React from "react";
const FeedbackForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <table style={{ marginLeft: "auto", marginRight: "auto" }}>
          <tbody>
            <tr>
              <td>Rating</td>
              <td>
                1
                {props.radioButtons.map((val) => {
                  return (
                    <input
                      key={val}
                      type="radio"
                      name="rating"
                      value={val}
                      onChange={props.onChange}
                      checked={val === props.radioValue}
                      required
                    />
                  );
                })}
                5
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <input
                  style={{ width: "100%", boxSizing: "border-box" }}
                  type="text"
                  name="name"
                  value={props.nameValue}
                  onChange={props.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Comments</td>
              <td>
                <textarea
                  style={{ width: "100%", boxSizing: "border-box" }}
                  name="comment"
                  rows="5"
                  cols="40"
                  value={props.commentValue}
                  onChange={props.onChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default FeedbackForm;
