import HistoryList from './../componemts/historyList'

const Result = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/4 bg-brown-dark">
        <HistoryList />
      </div>
      <div className="flex flex-col w-3/4 h-screen">
        <h2 className="flex flex-row-reverse mt-2 text-lg font-black">
          ログアウト
        </h2>
        <div className="mt-10 mx-10">
          <h1 className="font-black">質問</h1>
          <div className="bg-gray-light w-2/4 h-60">
            {/* <input></input> */}
          </div>
          <div className="flex justify-end">
            <div className="mt-10 text-right bg-gray-light w-2/4 h-60">
              {/* <input></input> */}
            </div>
          </div>
        </div>
        <h1 className="font-black text-right">要約文</h1>
        {/* サイドバーの実装 */}
        <div className="w-1/4 bg-brown-dark">
          <HistoryList />
        </div>
        {/* 要約文を受け取るところ */}
        <div className="flex flex-col mt-10 mx-10 w-3/4 h-screen">
          <div className="bg-gray-light w-2/4 h-60">{/* 質問が入る */}</div>
          <div className="flex justify-end">
            <div className="mt-10 text-right bg-gray-light w-2/4 h-60">
              {/* 要約文 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
