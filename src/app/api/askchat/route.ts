import { adminDB } from "@/firebaseAadmin";
import query from "@/lib/queryApi";
import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin";

export const POST = async (request : NextRequest) => 
{
    const requestBody = await request.json()
    console.log(requestBody)
    const { prompt, id, model, session } = await requestBody;

    try
    {
        if (!prompt) {
            return NextResponse.json(
              {
                message: "Please provide a propmt!",
              },
              { status: 400 }
            );
          }
      
          if (!id) {
            return NextResponse.json(
              {
                message: "Please provide a valid chat ID!",
              },
              { status: 400 }
            );
          }
          // const response = await query(prompt,id,model)
         const response = "Hello , welcome from chatgpt"
          console.log(" Your Api response",response)
          const message = {
          text: response || "ChatGPT was unable to find an answer for that!",
          createdAt: admin.firestore.Timestamp.now(),
         user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar:
          "https://res.cloudinary.com/duehd78sl/image/upload/v1729227742/logoLight_amxdpz.png",
      },
    };

    await adminDB
      .collection("users")
      .doc(session)
      .collection("chats")
      .doc(id)
      .collection("messages")
      .add(message);

      return NextResponse.json(
      {
        // answer: message?.text,
        message: "ChatGPT has responded!",
        success: true,
      },
      { status: 200 }
    );
        
    }
    catch(error)
    {
      return NextResponse.json({error:error}, {status:500});
    }
}