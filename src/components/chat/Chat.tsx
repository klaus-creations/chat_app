import React from 'react'
import ChatHeader from './ChatHeader'
import ChatRead from './ChatRead'
import ChatForm from './ChatForm'

export default function() {
  return (
    <section className='flex-grow w-auto h-full flex flex-col items-center'>
      <ChatHeader />
      <ChatRead />
      <ChatForm />
    </section>
  )
}

