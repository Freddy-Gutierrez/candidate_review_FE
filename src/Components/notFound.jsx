import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>NOT FOUND</h1>
      <Link to="/candidates">Back to candidates</Link>
    </div>
  );
};

export default NotFound;
