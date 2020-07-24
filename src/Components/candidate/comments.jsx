import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/candidatesTable.css";
const Comments = (props) => {
  return (
    <div>
      <div>Comments : </div>
      <br />
      <table
        style={{ marginLeft: "auto", marginRight: "auto", width: "800px" }}
      >
        <tbody>
          {props.candidate.comments.map((c) => {
            return (
              <React.Fragment key={c._id}>
                <tr>
                  <td>Rating: {c.rating}</td>
                  <td>{`Posted by ${c.name} on ${c.date}`}</td>
                  {props.user && c.userId === props.user._id ? (
                    <td>
                      <Link to={`/edit-comment/${props.candidate._id}`}>
                        Edit
                      </Link>
                    </td>
                  ) : (
                    <td>
                      <input type="hidden" />
                    </td>
                  )}
                </tr>
                <tr>
                  <td colSpan="3">{c.comment}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default Comments;
