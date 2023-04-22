import { History } from './history'

const HistoryList = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex text-right mt-5 ml-auto mr-0">
        <img src="image1.svg" alt="image" width={90} height={90} />
      </div>
      <History />
    </div>
  )
}
export default HistoryList
