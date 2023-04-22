import { ChatCompletionRequestMessage } from 'openai'
import { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

const Record = (): JSX.Element => {
  // TODO: 仮置きのchat履歴なので.どこかからとる.
  // TODO: 共通してしてほしいことを設定できるようにする.例: 要約か改善か変換か.
  const [chats, setChats] = useState<ChatCompletionRequestMessage[]>([
    { role: 'system', content: 'ChatGPTの振る舞い方を指定' },
  ])

  // TODO: GPTが考え中なら何か表示する.
  const [isGPTThinking, setIsGPTThinking] = useState<boolean>(false)

  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  // TODO: 嘘をつく問題を解決する.
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

  // GPTへのリクエストもしている.
  const handleStopRecord = async () => {
    try {
      const message: ChatCompletionRequestMessage = {
        role: 'user',
        content: transcript,
      }

      SpeechRecognition.stopListening()

      setIsGPTThinking(true)
      setChats((prev) => [...prev, message])

      const response = await fetch('/api/message', {
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

      setChats((prev) => [...prev, data as ChatCompletionRequestMessage])

      resetTranscript()

      // TODO: あとで消す.
      console.log(data, message, chats)
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
      } else {
        console.log(String(e))
      }
    } finally {
      setIsGPTThinking(false)
    }
  }

  // TODO: あとで消す.
  const testfunc = () => {
    console.log(chats)
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
      <button onClick={testfunc}>test</button>
    </div>
  )
}
export default Record
