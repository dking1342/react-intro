import React, { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);

  // rendered first
  // when you want to change layout before useEffect, data call, etc
  useLayoutEffect(() => {
    console.log("useLayoutEffect hook");
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log("useEffect hook");
    inputRef.current.value = "Hello";
  }, []);

  const handleChange = () => {
    console.log("change");
  };

  return (
    <div>
      <h1>Layout Effect Tutorial</h1>
      <input
        type="text"
        ref={inputRef}
        value="Kavooce"
        onChange={handleChange}
      />
    </div>
  );
};

export default LayoutEffectTutorial;
