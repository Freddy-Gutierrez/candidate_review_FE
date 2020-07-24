import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { getCurrentUser } from "./services/auth";
import Login from "./Components/login";
import SignUp from "./Components/signUp";
import Candidates from "./Components/candidate/candidates";
import AddCandidate from "./Components/candidate/addCandidate";
import ProtectedRoute from "./Components/protectedRoute";
import AccessDenied from "./Components/accessDenied";
import EditCandidate from "./Components/candidate/editCandidate";
import NotFound from "./Components/notFound";
import Feedback from "./Components/candidate/feedback";
import EditComment from "./Components/candidate/editComment";

class App extends Component {
  state = { user: {} };

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Switch>
          <Redirect from="/" to="/signup" exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/candidates" component={Candidates} />
          <ProtectedRoute
            path="/add-candidate"
            component={AddCandidate}
            auth={user ? user.isAdmin : false}
          />
          <ProtectedRoute
            path="/edit-candidate/:id"
            component={EditCandidate}
            auth={user ? user.isAdmin : false}
          />
          <Route path="/feedback/:id" component={Feedback} />
          <ProtectedRoute
            path="/edit-comment/:id"
            component={EditComment}
            auth={user ? user : false}
          />
          <Route path="/access-denied" component={AccessDenied} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
