import React, { Component } from "react";
import "./Editor.css"; // Make sure to adjust the path to your CSS file

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "",
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClear = () => {
    // Clear only the textarea content
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <h1>Kalvium Note</h1>
        <p>
          Hey, pay attention! This isn't some high-end email, so forget about
          any fancy formatting. Feel free to hit that enter key, but it won't
          change a thing. Just let your thoughts flow in one continuous stream,
          like a waterfall of words. Clear?
        </p>
        <div className="container">
          <div className="input">
            <h2>Input</h2>
            <textarea
              className="input-text"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </div>
          <div className="output">
            <h2>Pro Note</h2>
            <div className="output-text">{this.state.value}</div>
          </div>
        </div>
      </div>
    );
  }
}
