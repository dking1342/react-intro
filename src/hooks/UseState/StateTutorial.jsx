import React, { useState } from "react";

const StateTutorial = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Greeter</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("")}>Clear</button>
      <h2>Hello {name}</h2>
    </div>
  );
};

export default StateTutorial;
