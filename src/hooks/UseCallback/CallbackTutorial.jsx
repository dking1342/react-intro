import React, { useCallback, useState } from "react";
import Child from "./Child";

const CallbackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello! My name is");

  // const returnComment = (name) => {
  //   return data + name;
  // };

  const returnComment = useCallback((name) => {
      return data + name
    },[data],)
  

  // const returnComment = (name) => {
  //   return data + name;
  // };

  return (
    <div>
      <h1>Callback Tutorial</h1>
      <Child returnComment={returnComment} />
      <button onClick={()=>setData("Hello")}>Salutations</button>
      <button onClick={()=>setData("Goodbye")}>Partings</button>
      <button onClick={()=>setData("Good Afternoon")}>Greet Me</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4>toggle</h4>}
    </div>
  );
};

export default CallbackTutorial;
