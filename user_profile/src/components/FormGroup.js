import React, { Component } from "react";

class FormGroup extends Component {
  render() {
    return (
      <div className={!this.props.profileComplete ? "form-group" : "hide"}>
        {/* <button className={this.props.id === 0 ? "hide" : ""} onClick={this.props.handleFormGroupSubmit}>
          &#8592;
        </button> */}
        <label type={this.props.type} htmlFor={this.props.name} name={this.props.name} id={this.props.label}>
          {this.props.label}:
        </label>
        <input id={this.props.name}></input>
        <button className={!this.props.profileComplete ? "" : "hide"} onClick={this.props.handleFormGroupSubmit}>
          &#8594;
        </button>
      </div>
    );
  }
}

export default FormGroup;