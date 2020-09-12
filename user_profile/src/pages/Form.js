import React, { Component } from "react";
import formFields from "../content/formFields";
import localStorageFunctions from "../utils/localStorage";
import FormGroup from "../components/FormGroup";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      type: '',
      name: '',
      label: '',
      formInput: [],
      profileComplete: false
    };
  };

  componentDidMount() {
    this.setState({
      type: formFields[this.state.count].type,
      name: formFields[this.state.count].name,
      label: formFields[this.state.count].label
    });
  };

  handleFormGroupSubmit(event) {
    event.preventDefault();
    const formInput = this.state.formInput;
    const inputData = {
      inputField: this.state.label,
      userInput: event.target.previousSibling.value
    };
    formInput.push(inputData);
    this.setState({ formInput: formInput });

    let count = this.state.count;
    count ++;
    if (count === formFields.length) {
      this.setState({ profileComplete: true });
    } else {
      this.setState({
        count: count,
        type: formFields[count].type,
        name: formFields[count].name,
        label: formFields[count].label
      });
      event.target.previousSibling.value = '';
    };
  };

  storeUserInput() {
    localStorageFunctions.set(this.state.formInput);
  };

  render() {
    return (
      <div id="form">
        <h1>Profile Generator</h1>
        <form>
          <FormGroup 
            type={this.state.type}
            name={this.state.name}
            label={this.state.label}
            profileComplete={this.state.profileComplete}
            handleFormGroupSubmit={this.handleFormGroupSubmit.bind(this)}
          />
        </form>
        <button className={this.state.profileComplete ? "" : "hide"} onClick={this.storeUserInput.bind(this)}>
          <a href="/profile">Generate Profile</a>
        </button>
      </div>
    );
  }
}

export default Form;