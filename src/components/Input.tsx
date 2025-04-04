"use client";
import React, { useState } from 'react'
import { ImArrowUp2, ImArrowUpRight2 } from 'react-icons/im'
import { TbPaperclip } from 'react-icons/tb'

const Input = () => {
    const [prompt, setPrompt] = useState("")
  return (
    <div className='w-full flex flex-col items-center justify-center mx-auto pt-3 px-4'>
        <form className='w-full bg-white/10 rounded-full flex items-center px-4 py-2.5'>
           <TbPaperclip className='text-white text-2xl -rotate-45'/>
            <input
            placeholder='Your Message'
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            type='text'
            className='w-full bg-transparent outline-none text-white px-3 placeholder:text-gray-400 text-md tracking-wider'
            />
            <button disabled={!prompt} className=' p-2.5 rounded-full text-black bg-white disabled:bg-white/30'>
                <ImArrowUpRight2 className='text-black/50 text-sm'/>
            </button>     
        </form>
        <p className='text-sm pt-2 font-medium tracking-wide'>
            Chatgpt can make mistakes. Check import info
        </p>
    </div>
  )
}

export default Input