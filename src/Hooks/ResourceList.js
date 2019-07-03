import React, { useState, Component } from "react";
import axois from "axios";
class ResourceList extends Component {
  state = {
    resources: []
  };
  async componentDidMount() {
    const response = await axois.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: response.data });
  }
  //this is not recommended --infinete loop
  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axois.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resources: response.data });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.props.resource}</h1>
        <h1>{this.state.resources.length}</h1>
      </div>
    );
  }
}

export default ResourceList;

//Hooks;
//GIve life to functional COmponents
// Make it easy to share logic b/w components
