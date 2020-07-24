import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  path,
  component: Component,
  render,
  auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth)
          return (
            <Redirect
              to={{
                pathname: "/access-denied",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
