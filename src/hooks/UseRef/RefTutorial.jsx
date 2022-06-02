import React, { useRef } from 'react'

const RefTutorial = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = "";
    inputRef.current.style.background = "#ff0000";
  }

  return (
    <div>
      <h1>Ref Tutorial</h1>
      <h3>Kavooce</h3>
      <input type="text" placeholder='Ex...' ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default RefTutorial