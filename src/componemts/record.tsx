import { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

const Record = () => {
  const [message, setMessage] = useState<string>('')

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

  const startRecord = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'ja',
    })
  }

  const stopRecord = () => {
    SpeechRecognition.stopListening()

    setMessage(transcript)
    resetTranscript()
  }

  return (
    <div>
      <button type="button" onClick={startRecord}>
        Record
      </button>
      {listening && (
        <div>
          <button type="button" onClick={stopRecord}>
            Stop
          </button>
          <div>{transcript}</div>
        </div>
      )}
      <div>{message}</div>
    </div>
  )
}
export default Record
