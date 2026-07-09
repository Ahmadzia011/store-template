"use server"

import { ChatbotRespone } from "@/src/constants/service.constants"; 



export async function getResponse(input:string) : Promise<ChatbotRespone> {
    

  const apiKey = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  if(!apiKey || !url ){
    console.log(apiKey, url)
    return {
      success: false,
      message: 'ApiKey or URL not loaded..'
    }
  }
  console.log(url)

  try {
    const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: input }] }]
    })
  });


  
  const data = await response.json();
  console.log(data.candidates[0].content.parts[0].text)
  return {
    success: true,
    message: data.candidates[0].content.parts[0].text
  }

  }
  catch(e){
    return {
      success: false,
      message: 'Error while getting response..'
    }
  }
}
