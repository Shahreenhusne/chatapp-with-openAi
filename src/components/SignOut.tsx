'use client';

import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="text-sm underline text-gray-200 hover:text-white duration-300"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
