import Chat from '@/components/Chat';
import Input from '@/components/Input';
import React from 'react'

// interface Props {
//   params : {
//     id: string; 
//   }
// }
const page = async ({ params }: { params: { id: string } }) =>{
    const { id } = params;
  return (
    <div className="flex flex-col justify-center h-[100%] p-5 overflow-hidden">
    <div className="flex-1 overflow-y-scroll pt-10 md:pt-5">
     <Chat id={id} />
    </div>
    <Input id= {id} />
  </div>
  )
}

export default page