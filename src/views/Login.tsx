import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/features/store'
import { login } from '../features/auth/authActions'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
