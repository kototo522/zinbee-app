import { ChatCompletionRequestMessage } from 'openai'
import { Dispatch, SetStateAction } from 'react'

export type GptMessagesProps = {
  messages?: ChatCompletionRequestMessage[]
  setMessages: Dispatch<SetStateAction<ChatCompletionRequestMessage[]>>
}
