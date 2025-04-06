import React from 'react'
import Chat from './Chat'
import ChatInfo from './ChatInfo'

export default function ChatWrapper() {
  return (
    <div className='size-full flex'>
      <Chat />
      <ChatInfo />
    </div>
  )
}

