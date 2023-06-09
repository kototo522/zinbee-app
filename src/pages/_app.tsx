import '@/styles/globals.css'
import 'regenerator-runtime/runtime'
import '@/styles/helper.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'

// export default function App({ Component, pageProps, router }: AppProps) {
//   useEffect(() => {
//     router.push('./login')
//   }, [])
// }
