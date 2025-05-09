import { NextRequest, NextResponse } from "next/server";

export const POST = async (request : NextRequest) => 
{
    const requestBody = await request.json()
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
        
    }
    catch(error)
    {
      return NextResponse.json({error:error}, {status:500});
    }
}