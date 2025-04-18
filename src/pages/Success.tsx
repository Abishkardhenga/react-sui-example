import React from 'react'
import { useZKLogin } from 'react-sui-zk-login-kit'

const Success = () => {
    	const { address, logout } = useZKLogin()

  return (
    <div>
      <p>Success</p>
      <div>
        <span> Your address {address}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Success
