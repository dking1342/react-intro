import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <h1>Context Tutorial</h1>
      <Login /> <User />
    </AppContext.Provider>
  );

  // return (
  //   <div>
  //     <h1>Context Tutorial</h1>
  //     <Login setUsername={setUsername} /> <User username={username}/>
  //   </div>
  // )
};

export default ContextTutorial;
