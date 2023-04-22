import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Record from '@/componemts/record'
import HistoryList from '@/componemts/historyList'
import { AskGPTArea } from '@/componemts/AskGPTArea'

export default function Home() {
  return (
    <div>
      <Record />
      <HistoryList />
      <AskGPTArea />
    </div>
  )
}
