import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FiChevronDown } from "react-icons/fi";


const Header =  async () => {
  const session = await auth()
  return (
    <div  className='flex items-center justify-between m-2.5 h-10'>
      <button className=' flex items-center gap-1 px-3 py-2 bg-[#2f2f2f] hover:bg-black font-semibold rounded-md tracking-wide duration-300'>
        Chatgpt 
        <FiChevronDown />
      </button>
      {session?.user? 
      (
        <div>
            <Image
                src={session.user.image as string} 
                alt="User Image" 
                width={50} 
                height={50} 
              />
        </div>
      )
        :
        (<Link href={"/signin"}> Sign In</Link>)}
    </div>
  )
}

export default Header