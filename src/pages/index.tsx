import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Record from '@/componemts/record';
import HistoryList from '@/componemts/historyList';

export default function Home() {
  return(
    <div>
      <Record/>
      <HistoryList/>
    </div>
  )
}
