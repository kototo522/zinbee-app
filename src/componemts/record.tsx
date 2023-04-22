import { useGPT } from '@/hooks/useGPT'
import { ChatCompletionRequestMessage } from 'openai'
import { useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

const Record = (): JSX.Element => {
  // TODO: 仮置きのchat履歴なので.どこかからとる.
  // TODO: 共通してしてほしいことを設定できるようにする.例: 要約か改善か変換か.
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([
    { role: 'system', content: 'ChatGPTの振る舞い方を指定' },
  ])

  const { askGPT } = useGPT()

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
    SpeechRecognition.stopListening()

    await askGPT(messages, setMessages, transcript)

    resetTranscript()
  }

  // TODO: あとで消す.
  const testfunc = () => {
    console.log(messages)
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
