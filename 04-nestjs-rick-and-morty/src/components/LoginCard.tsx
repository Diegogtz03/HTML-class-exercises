"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"

export default function LoginCard() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSignIn = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    const response = await signIn("credentials", {
      username: email,
      password: password,
      callbackUrl: "/",
    })

    if (response === null) {
      setError("Invalid email or password")

      setTimeout(() => {
        setError("")
      }, 5000)
    }
  }

  return (
    <div className="flex h-fit flex-col items-center justify-center rounded-lg bg-slate-500 p-8 py-12">
      <h1 className="mb-5 text-4xl text-white">Sign in</h1>

      {error && <p className="text-red-500">{error}</p>}
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
        onClick={() => handleSignIn({ email: email, password: password })}
        className="rounde m-2 rounded-lg bg-zinc-800 p-2 px-4 text-white"
      >
        Sign In
      </button>
      <a className=" text-sm text-blue-400" href="/auth/register">
        Create an account
      </a>
    </div>
  )
}
