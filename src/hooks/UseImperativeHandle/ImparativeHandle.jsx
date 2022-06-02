import React, { useRef } from "react";
import Button from "./Button";

const ImparativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <h1>Imparative Handle</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Parent Button
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImparativeHandle;
