import React from "react";
const Table = (props) => {
  return (
    <div>
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <tbody>
          {props.inputs.map((i, ind) => {
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>
                  <input
                    type="text"
                    name={i.toLowerCase()}
                    value={props.values[ind]}
                    onChange={props.onChange}
                    readOnly={i === "ID" ? true : false}
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="2">
              <button className="btn btn-primary" onClick={props.onSubmit}>
                {props.action}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
