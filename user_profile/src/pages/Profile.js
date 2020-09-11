import React, { Component } from "react";
import formFields from "../content/formFields";
import localStorageFunctions from "../utils/localStorage";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
  };

  componentDidMount() {
    const userData = localStorageFunctions.get();
    // console.log(userData);
    this.setState({ userData: userData});
  };

  render() {
    const userData = this.state.userData;
    return (
      <div id="profile-page">
        <h1>User Profile</h1>
        <div id="profile">
          <h4>
          {(this.state.userData).map((input, index) => {
              if (input.inputField === 'First Name' || input.inputField === 'Last Name') {
                return <span key={index}>{` ${input.userInput}`}</span>;
              }
            })}
          </h4>
          {formFields.map((field, index) => {
            if (field.name === 'location' || field.name === 'company' || field.name === 'headline') {
              return <div className="section" id={field.name} key={index}>
                <p>{field.label}:</p>
                {(this.state.userData).map((input, index) => {
                  if (input.inputField === field.label) {
                    return <p key={index}>{input.userInput}</p>;
                  }
                })}
              </div>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Profile;