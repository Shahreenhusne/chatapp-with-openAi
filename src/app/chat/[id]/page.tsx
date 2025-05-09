import Input from '@/components/Input';
import React from 'react'

interface Props {
  params : {
    id: string; 
  }
}
const page = ({params: {id}} : Props) => {
  return (
    <div className="flex flex-col justify-center h-[100%] p-5 overflow-hidden">
    <div className="flex-1 overflow-y-scroll pt-10 md:pt-5">
      chat
    </div>
    <Input id= {id} />
  </div>
  )
}

export default page