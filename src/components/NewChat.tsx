"use client";
import { db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const NewChat = () => {
  const router = useRouter()
  const {data:session} = useSession()
  // if (!session?.user?.email) {
  //   console.error("User is not logged in!");
  //   return;
  // }
  // else{
  //   console.log(session.user.email)
  // }
  
  const createNewChat = async () =>  {
    //create a new chatID in firestore 
    const doc = await addDoc(
      collection(db, "users", session?.user?.email as string, "chats"),
      {
        userId: session?.user?.email as string,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc?.id}`);
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


//The useRouter hook in Next.js (App Router) is used to programmatically navigate between pages, access query parameters, and handle route changes dynamically.
