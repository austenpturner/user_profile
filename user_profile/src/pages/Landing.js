import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <h1>Welcome!</h1>
        <h4>Enter some information about yourself to generate a profile.</h4>
        <button>
            <a href="/form">Start Profile</a>
        </button>
      </div>
    );
  }
}

export default Landing;