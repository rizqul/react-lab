import type { User, UserSearchParams } from "../types/user.types";
import api from "./api";

export async function getAllUsers(): Promise<User[]> {
  const res = await api.get("/users");
  return res.data;
}

export async function getAllUsersWithPage(params: UserSearchParams): Promise<any> {
  const res = await api.get("users/advanced-search/page", { params });
  console.log("response " + res);
  return res.data;
}
