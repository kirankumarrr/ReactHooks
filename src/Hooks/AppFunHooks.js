import React, { useState } from "react";
// import ResourceList from "./ResourceList";
import ResourceListHook from "./ResourceListHook";
const AppFunHooks = () => {
  //just destructuring over here
  const [resource, setResource] = useState("posts");
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>React fun() with Hooks</h1>
      <div>
        <button onClick={() => setResource("posts")}>POSTS</button>
        <button onClick={() => setResource("todos")}>TODOs</button>
      </div>
      {/* <ResourceList resource={resource} /> */}
      <ResourceListHook resource={resource} />
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default AppFunHooks;

//Hooks;
//GIve life to functional COmponents
// Make it easy to share logic b/w components
