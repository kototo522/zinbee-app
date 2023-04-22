import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()
  function jumpHome() {
    router.push('./')
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" id="name" name="name" />
      <input type="email" id="email" name="email" />
      <input type="button" value="start" onClick={jumpHome} />
    </div>
  )
}
export default Login
