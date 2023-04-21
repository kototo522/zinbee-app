import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()
  function main() {
    router.push('./main')
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={main}>main</button>
    </div>
  )
}
export default Login
