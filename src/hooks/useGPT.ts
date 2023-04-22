import { ChatCompletionRequestMessage } from 'openai'
import { useCallback, useState } from 'react'

export const useGPT = () => {
  // TODO: GPTが考え中なら何か表示する.
  const [isGPTThinking, setIsGPTThinking] = useState<boolean>(false)

  const askGPT = useCallback(
    async (messages: ChatCompletionRequestMessage[], text: string) => {
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

        return {
          message,
          data,
        }
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
