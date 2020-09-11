import React, { Component } from "react";

class FormGroup extends Component {
  render() {
    return (
      <div className="form-group">
        <label type={this.props.type} htmlFor={this.props.name} name={this.props.name}>
          {this.props.label}
        </label>
        <input id={this.props.name}></input>
        <button className={!this.props.profileComplete ? "" : "hide"} onClick={this.props.handleFormGroupSubmit}>
          Next
        </button>
      </div>
    );
  }
}

export default FormGroup;