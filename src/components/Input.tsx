"use client";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';
import { ImArrowUp2, ImArrowUpRight2 } from 'react-icons/im'
import { TbPaperclip } from 'react-icons/tb'
import { useRouter } from 'next/navigation';



const Input = ({id}: {id?: string}) => {
    // console.log(id)
    const [prompt, setPrompt] = useState("")
    const {data:session} = useSession()
    const [loading, setloading] = useState(false)
    const userEmail = session?.user?(session?.user?.email as string):"unknown"
    const userName = session?.user?(session?.user?.name as string): "unknown"
    const router = useRouter()
    const model = 'gpt-3.5-turbo-instruct'

    //function
    const onSubmit = async(e:FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          if(!prompt) return;
          const input = prompt.trim();
          const messages = 
          {
            text: input,
            createdAt: serverTimestamp(),
            user : 
            {
              _id: userEmail,
              name: userName,
              avatar: 
              (session?.user?.image as string) ||  "https://i.ibb.co.com/XC0YX8v/avatar.png"
            }

          };

          try{
            setloading(true)
            let chatId = id 

             // If no chat ID is provided, create a new chat and get the ID
            if (!id)
            {
              const newDoc = await addDoc(collection( db, 'users',userEmail,"chats"),
                  {
                    userId: session?.user?.email as string,
                    createdAt: serverTimestamp(),
                  }
                );
              chatId = newDoc.id;
              router.push(`/chat/${chatId}`)
            }
            
            // Add the message to the new or existing chat, which has an id 
            await addDoc(collection(db,"users",userEmail, "chats", chatId as string,"messages"), messages)
            setPrompt("")
            // Toast notification to say loading
            // const notification = toast.loading("ChatGPT is thinking...");

           //send request to backend Api 
           await fetch("/api/askchat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: input,
              id: chatId,
              model,
              session: userEmail,
            }),
          }).then(async(res) => 
           {
            const data = await res.json()
            if (data?.success) {
              toast.success(data?.message);
            } else {
              toast.error(data?.message);
            }

          })
          }
          catch(error)
          {
            console.error("Error sending message:", error);
            toast.error("Something went wrong. Please try again.");

          }
          finally
          {
            setloading(false);
          }


    }



  return (
    <div className='w-full flex flex-col items-center justify-center mx-auto pt-3 px-4'>
        <form onClick={onSubmit} className='w-full bg-white/10 rounded-full flex items-center px-4 py-2.5'>
           <TbPaperclip className='text-white text-2xl -rotate-45'/>
            <input
            placeholder='Your Message'
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            type='text'
            className='w-full bg-transparent outline-none text-white px-3 placeholder:text-gray-400 text-md tracking-wider'
            />
            <button type='submit' disabled={!prompt} className=' p-2.5 rounded-full text-black bg-white disabled:bg-white/30'>
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





