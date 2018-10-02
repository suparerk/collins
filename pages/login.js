import React from 'react'
import Link from 'next/link'

const styling = {
  position: 'absolute',
  top: '-20%',
  zIndex: -1,
}

const Login = () => (
  <div>
    <img src="/static/images/login-mockup-img.png" alt="login" style={styling} />
    <Link href="/">
      <button type="button">Home</button>
    </Link>
  </div>
)

export default Login
