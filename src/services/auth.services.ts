import type { LoginPayload, LoginResponse } from "../types/auth.types";
import api from "./api";

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const res = api.post("/auth/login", payload);
  return (await res).data;
}
