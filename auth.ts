import NextAuth from "next-auth"
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }), // configuration for google 

  ],
}) // configuration for nextAuth

// NextAuth returns handlers have methods like (get,post), signIn, signOut, auth
//method signin, signout
// auth object , to know the session information 