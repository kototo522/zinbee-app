import { useGPT } from '@/hooks/useGPT'
import { GptMessagesProps } from '@/types/GptMessagesProps'
import { memo } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

// const Record = () => {
//   return (
//     <div>
//       <h2 className="flex flex-row-reverse text-lg mt-2 font-black">
//         ログアウト
//       </h2>
//       <div className="flex flex-col justify-center items-center w-full h-screen">
//         <h1 className="mb-5 font-black text-xl">音声を入力</h1>
//         <input type="image" src="mike.svg" alt="送信" />
//       </div>
//     </div>
//   )
// }

const Record = memo(
  ({ messages, setMessages }: GptMessagesProps): JSX.Element => {
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
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="mt-10 mb-5 font-black text-xl">音声を入力</h1>
        <div className="flex justify-center items-center">
          <button type="button" onClick={handleStartRecord}>
            <input type="image" src="mike.svg" alt="送信" />
          </button>
        </div>
        {listening && (
          <div className="flex flex-col">
            <button
              className="font-black text-xl w-20 h-20"
              type="button"
              onClick={handleStopRecord}
            >
              Stop
            </button>
            <div>{transcript}</div>
          </div>
        )}
        {/* <button onClick={testfunc}>test</button> */}
      </div>
    )
  }
)
export default Record
