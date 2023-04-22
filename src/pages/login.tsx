import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SetStateAction, useState } from 'react'

type changeEvent = {
  target: {
    value: React.SetStateAction<string>
  }
}

const Login: NextPage = () => {
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
    <div>
      <h2>Login</h2>
      <input type="text" id="name" name="name" onChange={handleNameChange} />
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleEmailChange}
      />
      <input
        type="text"
        id="password"
        name="password"
        onChange={handlePasswordChange}
      />
      <input type="submit" value="start" onClick={jumpHome} />
    </div>
  )
}
export default Login
