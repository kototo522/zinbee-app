import '@/styles/globals.css'
import 'regenerator-runtime/runtime'
import '@/styles/helper.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
