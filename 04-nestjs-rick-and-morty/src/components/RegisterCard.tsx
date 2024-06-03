"use client"
import { FormEvent, useState } from "react"
import { registerUser } from "@/services/auth"
import { navigateToLogin } from "@/actions/actions"

export default function LoginCard() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleCreateAccount = async ({
    event,
    name,
    username,
    password,
  }: {
    event: FormEvent<HTMLFormElement>
    name: string
    username: string
    password: string
  }) => {
    event.preventDefault()

    const response = await registerUser(name, username, password)

    if (response.code === 200) {
      navigateToLogin()
    } else {
      setError(response.error ?? "")

      setTimeout(() => {
        setError("")
      }, 5000)

      console.error("Failed to create user")
    }
  }

  return (
    <div className="flex h-fit flex-col items-center justify-center rounded-lg bg-slate-500 p-8 py-12">
      <h1 className="mb-5 text-4xl text-white">Sign up</h1>
      {error && <p className="text-red-400">{error}</p>}
      <form
        className="flex flex-col items-center"
        onSubmit={(e) =>
          handleCreateAccount({
            event: e,
            name: name,
            username: email,
            password: password,
          })
        }
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="m-2 rounded border border-gray-300 p-2"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="m-2 rounded border border-gray-300 p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="m-2 rounded border border-gray-300 p-2"
        />
        <button
          type="submit"
          className="rounde m-2 rounded-lg bg-zinc-800 p-2 px-4 text-white"
        >
          Sign up
        </button>
        <a className=" text-sm text-blue-400" href="/auth/login">
          Sign in
        </a>
      </form>
    </div>
  )
}
