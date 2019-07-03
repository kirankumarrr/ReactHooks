import React, { Component } from "react";
class App extends Component {
  state = { resource: "posts" };

  render() {
    return (
      <div className="App">
        <h1>React Class without Hooks</h1>
        <div>
          <button onClick={() => this.setState({ resource: "posts" })}>
            POSTS
          </button>
          <button onClick={() => this.setState({ resource: "todos" })}>
            TODOs
          </button>
        </div>
        <h1>{this.state.resource}</h1>
      </div>
    );
  }
}

export default App;

//Hooks;
//GIve life to functional COmponents
// Make it easy to share logic b/w components
