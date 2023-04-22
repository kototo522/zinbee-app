import { useRouter } from 'next/router'
import { useState } from 'react'

type changeEvent = {
  target: {
    value: React.SetStateAction<string>
  }
}

const Login = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function jumpHome() {
    name && email && password ? router.push('./') : console.log('未入力')
    console.log(name, email, password)
  }

  const handleNameChange = (event: changeEvent) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event: changeEvent) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event: changeEvent) => {
    setPassword(event.target.value)
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl font-black">Login</h2>
      <div className="flex flex-col mt-10 w-1/3">
        <input
          className="border"
          type="text"
          id="name"
          name="name"
          onChange={handleNameChange}
        />
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
        onClick={jumpHome}
      />
    </div>
  )
}

export default Login
