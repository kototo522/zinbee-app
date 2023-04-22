import HistoryList from '@/componemts/historyList'
import Record from '@/componemts/record'

export default function Home() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/4">
        <HistoryList />
      </div>
      <div className="w-3/4">
        <Record />
      </div>
    </div>
  )
}
