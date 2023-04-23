import React from 'react'
import HistoryList from './../componemts/historyList'

const Result = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/4 bg-brown-dark">
        <HistoryList />
      </div>
      <div className="flex flex-col mt-10 mx-10 w-3/4 h-screen">
        <h1 className="font-black">質問</h1>
        <div className="bg-gray-light w-2/4 h-60">{/* <input></input> */}</div>
        <div className="flex justify-end">
          <div className="mt-10 text-right bg-gray-light w-2/4 h-60">
            {/* <input></input> */}
          </div>
        </div>
        <h1 className="font-black text-right">要約文</h1>
      </div>
    </div>
  )
}

export default Result
