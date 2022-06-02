import React, { useEffect } from 'react'

const Child = ({ returnComment }) => {

  useEffect(()=>{
    console.log("function called");
  },[returnComment])

  return (
    <div>
      <h3>Child</h3>
      <p>{ returnComment(" kavooce") }</p>
    </div>
  )
}

export default Child