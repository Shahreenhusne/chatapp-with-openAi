import Link from 'next/link'
import React from 'react'
import { IoHome } from 'react-icons/io5'
import NewChat from './NewChat'

export const Sidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col w-full h-screen p-2.5 relative">
    {/* New Chat */}
    <div className="flex items-center gap-1">
        <Link
          href={"/"}
          className="border border-white/10 text-xs md:text-base p-1.5 md:p-2 rounded-md text-white/50 hover:text-white hover:border-white/50 duration-300 ease-in-out"
        >
          <IoHome />
        </Link>
        <NewChat />
      </div>
    </div>
  )
}
