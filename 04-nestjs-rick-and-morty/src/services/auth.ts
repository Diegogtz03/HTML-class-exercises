import { AuthResponse } from "@/types/auth"

export async function verifyUser(
  email: string,
  password: string,
): Promise<AuthResponse> {
  return fetch(`${process.env.API_ROOT_ROUTE}/api/user/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json())
}

export async function registerUser(
  name: string,
  email: string,
  password: string,
): Promise<AuthResponse> {
  return fetch(`/api/user/register`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  }).then((res) => res.json())
}
