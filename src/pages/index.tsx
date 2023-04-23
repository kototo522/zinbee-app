import { AskGptTextarea } from '@/componemts/askGptTextarea'
import { GptOption } from '@/componemts/gptOption'
import HistoryList from '@/componemts/historyList'
import Record from '@/componemts/record'
import { ChatCompletionRequestMessage } from 'openai'
import { useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  return (
    <div className="flex w-full">
      <div className="w-1/4 bg-brown-dark">
        <HistoryList />
      </div>
      <div className="w-3/4">
        <Record messages={messages} setMessages={setMessages} />
        <AskGptTextarea messages={messages} setMessages={setMessages} />
        <div className='flex flex-col items-center mt-5 font-black'>
          <GptOption setMessages={setMessages} />
          <button className="mt-5 font-black text-sm text-red" onClick={() => setMessages([])}>
          optionをリセットする
          </button>
        </div>
      </div>
    </div>
  )
}
