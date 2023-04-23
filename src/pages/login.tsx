import { useRouter } from 'next/router'
import { useState } from 'react'
import { app } from '../Firebase/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'

type changeEvent = {
  target: {
    value: React.SetStateAction<string>
  }
}

const Login = () => {
  const auth = getAuth(app)
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success(`Welcome back！`)
        signInWithEmailAndPassword(auth, email, password)
        router.push('./')
      })
      .catch((error) => {
        handleLoginError(error)
      })
  }

  function handleLoginError(error: { code: any }) {
    switch (error.code) {
      case 'auth/wrong-password':
        toast.error('パスワードが間違っています。')
        break
      case 'auth/user-not-found':
        toast.error('ユーザーが見つかりません。')
        break
      case 'auth/invalid-email':
        toast.error('正しい形式のメールアドレスを入力してください。')
        break
      case 'auth/too-many-requests':
        toast.error(
          'アカウントが一時的にロックされています。しばらくしてから再度お試しください。'
        )
        break
      default:
        toast.error('ログインに失敗しました。')
        break
    }
  }

  const handleEmailChange = (event: changeEvent) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event: changeEvent) => {
    setPassword(event.target.value)
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t from-gray-light to-white">
      <h2 className="text-6xl font-black">Login</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col mt-10 w-1/3">
          <input
            className="mt-2 border"
            type="email"
            id="email"
            name="email"
            onChange={handleEmailChange}
          />
          <input
            className="mt-2 border"
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordChange}
          />
        </div>
        <input
          className="mt-10 px-10 font-black border"
          type="submit"
          value="start"
        />
        <Toaster />
      </form>
      <div className=" flex flex-col items-center justify-center ">
        <Link className="border-b mt-10" href="/signUp">
          新規登録はこちら
        </Link>
      </div>
    </div>
  )
}

export default Login
