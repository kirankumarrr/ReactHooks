import React, { useState, useEffect } from "react";
import axois from "axios";
const ResourceListHook = ({ resource }) => {
  const [resources, SetResources] = useState([]);
  const fetchResources = async resource => {
    const response = await axois.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    SetResources(response.data);
  };

  useEffect(() => {
    fetchResources(resource);
  }, [resource]);
  //why array with resource??
  //useEffect(()=>{},['posts'])
  //different values so our arrow function is executed
  //useEffect(()=>{},['todos'])
  //NOTE:if you dont pass array argument you end up with infiinte loop
  //Not recommended
  // useEffect(() => {
  //   fetchResources(resource);
  // });
  //if you pass empty array argument is identicall to componentDidMount--calls on initlization
  // useEffect(() => {
  //   fetchResources(resource);
  // },[]);
  //this below works fine
  // useEffect(() => {
  //   fetchResources(resource);
  // },['hi']);
  //after change
  // useEffect(() => {
  //   fetchResources(resource);
  // },[1]);
  //because the values passed are different
  // calling with object arguments
  // useEffect(() => {
  //   fetchResources(resource);
  // },[{color:'red'}]);
  //after change
  // useEffect(() => {
  //   fetchResources(resource);
  // },[{color:'red'}]);
  //end up calling infinte loop bcoz
  //React this its a  new object been called since they store in different location
  //Cam pass n number of arguments -works fine
  // useEffect(() => {
  //   fetchResources(resource);
  // },[1,2]);
  //Cam pass different number of arguments -works called again & again
  // useEffect(() => {
  //   fetchResources(resource);
  // },[1,2});
  //affter change
  // useEffect(() => {
  //   fetchResources(resource);
  // },[1]);
  return (
    <div className="App">
      <h1>{resource}</h1>
      <h1>{resources.length}</h1>
    </div>
  );
};

export default ResourceListHook;

//Hooks;
//GIve life to functional COmponents
// Make it easy to share logic b/w components
