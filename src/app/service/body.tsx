'use client'

import { useAuth } from "@clerk/nextjs"
import { deductCredits, hasCredits } from "../actions/credits.actions"
import { useEffect, useRef, useState } from "react";
import { getResponse } from "../actions/getchatbotResponse.actions";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function ServiceBody(){

    const {userId} = useAuth()
    const [messages, setMessages] = useState([
      { id: 1, text: "Hello! How can I help you today?", isBot: true },
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      // Scroll to the latest message smoothly whenever messages update.
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }, [messages]);



    const handleServiceUsage = async () => {
        if(!userId) return
        try{
            const isAllowed = await hasCredits(userId)
            if(isAllowed){

              const response = await getResponse(input)

              if( response.success){
                   setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, text: response.message, isBot: true }
              ]);
                const creditsDeducted = await deductCredits(userId)
              }
              else{
                setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, text: response.message, isBot: true }
              ]);
              }
            }
            else{
                console.log("Service didn't work")
                setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, text: "No enough credits to use the service, one credit per message.", isBot: true }
              ]);
            }
        }
        catch(e){
            console.log('Error while handling service usage..')
        }
    }




    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();

      if (!input.trim()) return;

      // 1. Add user message to chat
      const userMessage = { id: Date.now(), text: input, isBot: false };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      // 2. Trigger your original credit usage logic
       handleServiceUsage();

    };



    return(
           <div className="min-h-[80vh] flex justify-center items-center p-10">
      {/* Chat Container */}
      <div className="w-full max-w-3xl h-190 rounded-2xl flex flex-col mt-5 overflow-hidden ">
        
        {/* <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-white flex justify-between items-center shadow-sm">
        AI ASSISTANT
        </div> */}

        {/* Message History Area */}
        <div className="flex-1 overflow-y-auto scrollbar-none p-5 pt-15 space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                  msg.isBot
                    ? 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                    : 'bg-amber-500 text-white rounded-tr-none'
                }`}
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 bg-slate-100 text-sm rounded-xl px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:bg-white transition-all"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium text-sm rounded-xl px-4 py-3 cursor-pointer transition-colors shadow-sm whitespace-nowrap"
          >
            Send
          </button>
        </form>

      </div>
    </div>
      )
}