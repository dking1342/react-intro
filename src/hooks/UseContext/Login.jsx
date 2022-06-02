import React, { useContext } from 'react'
import { AppContext } from './ContextTutorial'

const Login = () => {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <h1>Login</h1>
      <input type="text" onChange={(e)=>setUsername(e.target.value)} />
    </div>
  )
}

export default Login