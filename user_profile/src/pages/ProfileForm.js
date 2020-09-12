import React, { Component } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import formFields from "../content/formFields";
import localStorageFunctions from "../utils/localStorage";
import FormGroup from "../components/FormGroup";

const Form = styled.form`
  .transition-enter {
    opacity: 0.01;
    transform: translate(100vw, 0px);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 1000ms ease-out;
  }

  .transition-exit {
    opacity: 1;
    transform: translate(-10vw, 0);
  }

  .transition-exit-active {
    opacity: 0.01;
    transform: translate(-100vw, 0px);
    transition: all 800ms ease-out;
  }
`;

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      formFieldAttributes: [],
      formInput: [],
      profileComplete: false
    };
  };

  renderNewFormGroup(count) {
    const attributes = this.state.formFieldAttributes;
    attributes.push({
      type: formFields[count].type,
      name: formFields[count].name,
      label: formFields[count].label
    });
    this.setState({ 
      count: count,
      formFieldAttributes: attributes 
    });
  };

  saveUserInput(event) {
    const formInput = this.state.formInput;
    formInput.push({
      inputField: event.target.previousSibling.previousSibling.id,
      userInput: event.target.previousSibling.value
    });
    this.setState({ formInput: formInput });
  };

  storeUserInput() {
    localStorageFunctions.set(this.state.formInput);
  };

  componentDidMount() {
    const count = this.state.count;
    this.renderNewFormGroup(count);
  };

  handleFormGroupSubmit(event) {
    event.preventDefault();
    this.saveUserInput(event);

    const count = this.state.count + 1;
    if (count === formFields.length) {
      this.setState({ profileComplete: true });
    } else {
      this.renderNewFormGroup(count);
      event.target.previousSibling.value = '';
    };
  };

  render() {
    return (
      <div id="form">
        <h1>Profile Generator</h1>
        <TransitionGroup component={Form}>
          {this.state.formFieldAttributes.map((formGroup, index) => {
            if (index === this.state.count) {
              return <CSSTransition key={index} timeout={800} classNames="transition">
                <FormGroup
                  id={index} 
                  type={formGroup.type}
                  name={formGroup.name}
                  label={formGroup.label}
                  profileComplete={this.state.profileComplete}
                  handleFormGroupSubmit={this.handleFormGroupSubmit.bind(this)}
                />
              </CSSTransition>
            }
          })}
          <button id="generate-btn" className={this.state.profileComplete ? "" : "hide"} onClick={this.storeUserInput.bind(this)}>
            <a href="/profile">Generate Profile</a>
          </button>
        </TransitionGroup>
      </div>
    );
  }
}

export default ProfileForm;