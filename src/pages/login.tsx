import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()
  function home() {
    router.push('./home')
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={home}>home</button>
    </div>
  )
}
export default Login
