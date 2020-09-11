import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <h1>Welcome!</h1>
        <div>
        <button>
            <a href="/form">Start Profile</a>
        </button>
        </div>
      </div>
    );
  }
}

export default Landing;