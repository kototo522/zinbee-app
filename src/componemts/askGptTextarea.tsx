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
      <div>
        {/* TODO: formを使うとページ遷移が発生するので解決する. */}
        {/* <form onSubmit={handleSubmit}> */}
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleClick} type="button">
          送信
        </button>
        {/* </form> */}
      </div>
    )
  }
)
