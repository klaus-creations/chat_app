import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

export default function ChatHeader() {
  return (
    <div className='w-full h-[10%] flex items-center justify-between px-3 border-b-[1px] border-b-gray-300 dark:border-b-gray-700'>

      <div className='flex flex-col items-start gap-1'>
        <div className='flex items-center gap-2'>
          <Avatar className="size-10 flex items-center justify-center rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-sm 2xl:text-base">Cristiano Ronaldo</h2>
        </div>

        <span className='text-sm lg:text-base text-green-500'>Online</span>
      </div>
      <div className='flex items-center justify-center'></div>
    </div>
  )
}

