import { useGPT } from '@/hooks/useGPT'
import { GptMessagesProps } from '@/types/GptMessagesProps'
import { memo, useState } from 'react'

export const AskGptTextarea = memo(
  ({ messages, setMessages }: GptMessagesProps): JSX.Element => {
    const [newMessage, setNewMessage] = useState<string>('')

    const { askGPT } = useGPT()

    const handleClick = async () => {
      await askGPT(messages, setMessages, newMessage)
      setNewMessage('')
    }

    return (
      <div className='flex flex-col items-center'>
        {/* TODO: formを使うとページ遷移が発生するので解決する. */}
        {/* <form onSubmit={handleSubmit}> */}
        <button className="font-black border text-2xl px-10 rounded hover:opacity-40" onClick={handleClick} type="button">
          送信
        </button>
        <h3 className='pt-10 text-sm font-black'>テキスト入力はこちら↓</h3>
        <textarea
          className='border rounded'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        {/* </form> */}
      </div>
    )
  }
)
