import React from 'react'
import { Input } from '../ui/input'
import { Plus, Send } from 'lucide-react'

export default function ChatForm() {
  return (
    <form className='w-full h-[10%] flex items-center justify-between px-2'>
      <button className='p-2 bg-violet-600 text-white rounded-lg'>
        <Plus />
      </button>
      <Input className='h-[60%] w-[80%] px-2 border-[1px] border-gray-400' placeholder='Say something...' />

      <button className='p-2 bg-violet-600 text-white rounded-lg'>
        <Send />
      </button>
    </form>
  )
}

