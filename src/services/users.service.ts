import type { User } from "../types/user.types";
import api from "./api";

export async function getAllUsers(): Promise<User[]> {
  const res = await api.get("/users");
  return res.data;
}
