import { auth } from "@/auth";
import SignIn from "@/components/Signin";
import { redirect } from "next/navigation";
import React from "react";

const SignInPage = async () => {
 
  
  return (
    <div className="fixed w-full h-full bg-black/80 left-0 flex items-center justify-center">
      <SignIn/>
    </div>
  );
};

export default SignInPage;