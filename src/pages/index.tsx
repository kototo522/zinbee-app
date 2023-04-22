import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Record from '@/componemts/record'
import HistoryList from '@/componemts/historyList'
import { AskGPTTextarea } from '@/componemts/AskGPTTextarea'

export default function Home() {
  return (
    <div>
      <Record />
      <HistoryList />
      <AskGPTTextarea />
    </div>
  )
}
