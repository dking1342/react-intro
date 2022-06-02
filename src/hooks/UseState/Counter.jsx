import React, { useState } from 'react'

const Counter = () => {
  let [count, setCount] = useState(0);
  let [constantValue, setContantValue]=useState(1);

  const handleIncrement = () => {
    setCount(count + constantValue);
  }

  const handleDecrement = () => {
    setCount(count - constantValue);
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <div>
          <input type="number" placeholder='Enter change value' onChange={(e)=>setContantValue(Number(e.target.value))} />
        </div>
        <br></br>
        <div>
          <span><button onClick={handleIncrement}>+</button></span>
          <span>{ count }</span>
          <span><button onClick={handleDecrement}>-</button></span>
        </div>
      </div>
    </div>
  )
}

export default Counter