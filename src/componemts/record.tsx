const Record = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="mb-5 font-black text-xl">音声を入力</h1>
        <input type="image" src="mike.svg" alt="送信" />
      </div>
      <h2 className="flex flex-row-reverse items-end font-black text-lg">
        ログアウト
      </h2>
    </div>
  )
}

export default Record
