import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import SignOut from './SignOut';


const Header =  async () => {
  const session = await auth()
  // console.log(session)
  return (
    <div  className='flex items-center justify-between m-2.5 h-10'>
      <button className=' flex items-center gap-1 px-3 py-2 bg-[#2f2f2f] hover:bg-black font-semibold rounded-md tracking-wide duration-300'>
        Chatgpt 
        <FiChevronDown />
      </button>
      {session?.user ? (
        <div>
            <div className="w-8 h-8 rounded-full ring-4 ring-white/10 hover:ring-white/50 font-semibold tracking-wide mr-2 duration-300">
              <Image
                src={session?.user?.image as string}
                alt="userImage"
                width={400}
                height={400}
                priority
                className="w-full h-full rounded-full object-cover"
              />
            </div>
         <SignOut/>
          </div>
          ) : (
            <Link
              href={"/signin"}
              className="text-sm font-semibold hover:text-white duration-300"
            >
              Sign in
            </Link>
          )}
    </div>
  )
}

export default Header