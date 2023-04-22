import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Record from '@/componemts/record'
import HistoryList from '@/componemts/historyList'
import { GptOption } from '@/componemts/gptOption'
import { AskGptTextarea } from '@/componemts/askGptTextarea'
import { ChatCompletionRequestMessage } from 'openai'

export default function Home() {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  return (
    <div>
      <Record />
      <HistoryList />
      <AskGptTextarea />
      <GptOption setMessages={setMessages} />
    </div>
  )
}
