import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((_, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      {/* <button onClick={()=>setToggle(!toggle)}>Child Button</button> */}
      <button>Child Button</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
