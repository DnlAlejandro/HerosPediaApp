import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate()

  const handleLogin = () => {

    const lastpath = localStorage.getItem('lastpath') || '/heroes-app/';

    login('DnlAlejandro');

    navigate(lastpath, {
      replace: true
  })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-gray-900">Login</h1>
      <button
        className="w-full max-w-sm mt-8 bg-indigo-500 hover:bg-indigo-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
        onClick={handleLogin}
      >
        Join
      </button>
    </div>
  )
}
