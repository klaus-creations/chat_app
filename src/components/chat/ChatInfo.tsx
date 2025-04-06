import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

export default function ChatInfo() {
  return (
    <div className='w-[30%] h-full flex flex-col gap-2 p-2'>
      <div className='flex flex-col items-center gap-2 border-b-[1px] border-b-gray-300 dark:border-b-gray-800 pb-5'>
        <Avatar className="size-20 flex items-center justify-center rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-sm 2xl:text-base font-extrabold tracking-[1px]">Cristiano Ronaldo</h2>
      </div>
      <div className='flex flex-col items-start gap-1 border-b-[1px] border-b-gray-300 dark:border-b-gray-800 py-3'>

        <span className='text-sm lg:text-base text-gray-500 dark:text-gray-400'>username</span>
        <span className='text-sm lg:text-base text-gray-600 dark:text-gray-300'>
          @cr7_goat
        </span>
      </div>


      <div className='flex flex-col items-start gap-1 border-b-[1px] border-b-gray-300 dark:border-b-gray-800 py-3'>

        <span className='text-sm lg:text-base text-gray-500 dark:text-gray-400'>Bio</span>
        <span className='text-sm lg:text-base text-gray-600 dark:text-gray-300'>
          I am the best football player in the world just admit it. you can ask anyone this is fact
        </span>
      </div>

      <button className='bg-red-500 px-5 py-2 rounded-md text-gray-100 font-bold cursor-pointer w-full tracking-[1px] text-base lg:text-xl'>
        Block
      </button>

    </div>
  )
}

