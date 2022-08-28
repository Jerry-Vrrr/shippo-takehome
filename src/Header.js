import React from 'react'
import './Header.css'

export default function ({user, loggedIn}) {
  return (
    <div>
        {user && loggedIn && <h1>Welcome Back, {user}!</h1>}
    </div>
  )
}
