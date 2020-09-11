import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Form from "./pages/Form";
import Profile from "./pages/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/form" component={Form}></Route>
          <Route exact path="/profile" component={Profile}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;