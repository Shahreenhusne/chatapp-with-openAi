
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { IoChatboxOutline } from 'react-icons/io5';
import { db } from "@/firebase";

const ChatRow = ({id}:{id:string}) => {

  const pathName = usePathname();
  const router = useRouter();
  const {data: session} = useSession();
  const [active, setActive] = useState(false);
  const [messages, loading] = useCollection(
    query(
      collection(db,"users", session?.user?.email as string, "chats", id , "messages")
    )
  )

    const [chatsSnapshot] = useCollection(
    query(
      collection(db, "users", session?.user?.email as string, "chats"),
      orderBy("createdAt", "desc")
    )
  );

    const chat =messages?.docs[messages?.docs?.length - 1]?.data().text &&
    messages?.docs[messages?.docs?.length - 1]?.data();

  const chatText = chat?.text || "New Chat";
  const shouldAnimate = active;

 //hooks 
   useEffect( () => {
      if(!pathName) return
      setActive(pathName.includes(id))
   },[pathName,id])

//functions 
   const handleRemoveChat =  async() => {
    await deleteDoc(
      doc(db,"users", session?.user?.email as string, "chats",id)
    )
    if(active)
      {
        const newChat = chatsSnapshot?.docs?.find((chat)=> chat.id !== id)
        console.log(newChat)
        if(newChat)
        {
          router.push(`/chat/${newChat?.id}`)
        }
        else
        {
          router.push("/")
        }
      }

   };

  return (
    <>
      <Link href={`/chat/${id}`} 
      className={`flex gap-2 items-center justify-center px-2 py-1.5 hover:bg-white/10 rounded-md mb-2 duration-300 ease-in
      ${active? "bg-white/10": "bg-transparent"}`}>
      <IoChatboxOutline />
      <p>{chatText}</p>
       <BiSolidTrashAlt onClick={handleRemoveChat}  className="text-white/50 hover:text-red-700 duration-300 ease-in-out"/>
      </Link>
    </>
  )
}

export default ChatRow

// find() -> Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
