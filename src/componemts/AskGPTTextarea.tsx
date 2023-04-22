import { useGPT } from '@/hooks/useGPT'
import { ChatCompletionRequestMessage } from 'openai'
import { useState } from 'react'

export const AskGPTTextarea = (): JSX.Element => {
  // TODO: 仮置きのchat履歴なので.どこかからとる.
  // TODO: 共通してしてほしいことを設定できるようにする.例: 要約か改善か変換か.
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([
    { role: 'system', content: 'ChatGPTの振る舞い方を指定' },
  ])
  const [newMessage, setNewMessage] = useState<string>('')

  const { askGPT } = useGPT()

  const handleSubmit = async () => {
    await askGPT(messages, setMessages, newMessage)
  }

  return (
    <div>
      {/* TODO: formを使うとページ遷移が発生するので解決する. */}
      {/* <form onSubmit={handleSubmit}> */}
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSubmit} type="button">
        送信
      </button>
      {/* </form> */}
      <button type="submit" onClick={() => console.log(messages)}>
        test
      </button>
    </div>
  )
}
