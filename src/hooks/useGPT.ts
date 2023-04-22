import { ChatCompletionRequestMessage } from 'openai'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'

export const useGPT = () => {
  // TODO: GPTが考え中なら何か表示する.
  const [isGPTThinking, setIsGPTThinking] = useState<boolean>(false)

  const askGPT = useCallback(
    async (
      messages: ChatCompletionRequestMessage[],
      setMessages: Dispatch<SetStateAction<ChatCompletionRequestMessage[]>>,
      text: string
    ) => {
      try {
        const message: ChatCompletionRequestMessage = {
          role: 'user',
          content: text,
        }
        setIsGPTThinking(true)

        const response = await fetch('/api/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: [...messages, message].map((d) => ({
              role: d.role,
              content: d.content,
            })),
          }),
        })

        const data = await response.json()

        if (response.status !== 200) {
          throw (
            data.error ||
            new Error(`Request failed with status ${response.status}`)
          )
        }

        setIsGPTThinking(false)

        setMessages((prev) => [...prev, message])
        setMessages((prev) => [...prev, data as ChatCompletionRequestMessage])

        // TODO: あとで消す.
        console.log(data, message, messages)
      } catch (e) {
        if (e instanceof Error) {
          throw new Error(e.message)
        } else {
          throw new Error(String(e))
        }
      }
    },
    []
  )

  return {
    isGPTThinking,
    askGPT,
  }
}
