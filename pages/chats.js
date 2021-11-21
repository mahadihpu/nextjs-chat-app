import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context'

const ChatEngine = dynamic(() =>
  import('react-chat-engine').then((module) => module.ChatEngine),
)
const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then((module) => module.MessageFormSocial),
)

export default function Chats() {
  const { username, secret, setUsername, setSecret } = useContext(Context)
  const router = useRouter()
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true)
    }
  }, [])
  useEffect(() => {
    if (username.length === 0 || secret.length === 0) {
      router.push('/')
    }
  }, [])

  if (!showChat) return <div />
  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="
          a18bd87b-245f-4470-b8cf-b7be09369330"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  )
}
