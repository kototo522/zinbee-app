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
      <div className="w-1/4">
        <HistoryList />
      </div>
      <div className="w-3/4">
        <Record messages={messages} setMessages={setMessages} />
        <AskGptTextarea messages={messages} setMessages={setMessages} />
        <GptOption setMessages={setMessages} />
        <button onClick={() => setMessages([])}>
          メッセージをリセットする
        </button>
      </div>
    </div>
  )
}
