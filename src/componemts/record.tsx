import { ChatCompletionRequestMessage } from 'openai'
import { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

const Record = (): JSX.Element => {
  // TODO: 仮置きのchat履歴なので.どこかからとる.
  // TODO: 共通してしてほしいことを設定できるようにする.例: 要約か改善か変換か.
  const [chats, setChats] = useState<ChatCompletionRequestMessage[]>([])
  const [isGPTThinking, setIsGPTThinking] = useState<boolean>(false)

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript)
    }
  }, [interimTranscript, finalTranscript])

  if (!browserSupportsSpeechRecognition) {
    console.log(
      'Your browser does not support speech recognition software! Try Chrome desktop, maybe?'
    )
  }

  const handleStartRecord = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'ja',
    })
  }

  const handleStopRecord = async () => {
    try {
      const message: ChatCompletionRequestMessage = {
        role: 'user',
        content: transcript,
      }

      SpeechRecognition.stopListening()

      setIsGPTThinking(true)
      setChats((prev) => [...prev, message])

      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: [...chats, message].map((d) => ({
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

      setChats((prev) => [...prev, data.result as ChatCompletionRequestMessage])

      resetTranscript()

      console.log(chats)
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
      } else {
        throw new Error(String(e))
      }
    } finally {
      setIsGPTThinking(false)
    }
  }

  return (
    <div>
      <button type="button" onClick={handleStartRecord}>
        Record
      </button>
      {listening && (
        <div>
          <button type="button" onClick={handleStopRecord}>
            Stop
          </button>
          <div>{transcript}</div>
        </div>
      )}
    </div>
  )
}
export default Record
