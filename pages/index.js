import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { Context } from '../context'

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context)
  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return

    axios
      .put(
        'https://api.chatengine.io/users/',
        { username, secret },
        { headers: { 'Private-key': '00369e4a-6bc4-4c1e-8812-583f27bbd9ff' } },
      )
      .then((res) => router.push('/chats'))
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Nextjs Chat</div>
          <div className="input-container">
            <input
              placeholder="Enter your email"
              type="email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Enter your password"
              type="password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login/Sign up
          </button>
        </form>
      </div>
    </div>
  )
}
