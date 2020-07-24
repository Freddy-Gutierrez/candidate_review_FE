import React from "react";
import { Link } from "react-router-dom";
const AccessDenied = () => {
  return (
    <div>
      <h1>ACCESS DENIED</h1>
      <Link to="/candidates">Back to candidates</Link>
    </div>
  );
};

export default AccessDenied;
