"use client";
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const NewChat = () => {
  const createNewChat = async () =>  {

  }
  return (
    <button
    onClick={createNewChat}
    className="flex items-center justify-center gap-2 text-xs md:text-base border border-primary-foreground/10 w-full rounded-md px-2 py-1 hover:bg-primary-foreground/10 duration-300 ease-in-out"
  >
    <FaPlus /> New Chat
  </button>
  )
}

export default NewChat