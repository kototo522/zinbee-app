import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  function jumpHome() {
    router.push('./')
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl font-black">Login</h2>
      <div className="flex flex-col mt-10 w-1/3">
        <input className="border" type="text" id="name" name="name" />
        <input className="mt-2 border" type="email" id="email" name="email" />
      </div>
      <input
        className="mt-10 px-10 font-black border"
        type="button"
        value="start"
        onClick={jumpHome}
      />
    </div>
  )
}

export default Login
