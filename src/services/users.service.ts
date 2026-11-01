import type { User, UserSearchParams } from "../types/user.types";
import api from "./api";

export async function getAllUsers(): Promise<User[]> {
  const res = await api.get("/users");
  return res.data;
}

export interface PaginatedUsers {
  data: User[];
  paging: {
    currentPage: number;
    totalPage: number;
    size: number;
    totalElements: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

interface ApiEnvelope<T> {
  data: T;
}

function isPaginatedUsers(value: unknown): value is PaginatedUsers {
  if (!value || typeof value !== "object") return false;

  const response = value as { data?: unknown; paging?: unknown };
  return Array.isArray(response.data) && Boolean(response.paging);
}

export async function getAllUsersWithPage(params: UserSearchParams): Promise<PaginatedUsers> {
  const response = await api.get<unknown>("/users/advanced-search/page", { params });
  const payload = response.data;
  const paginatedUsers = isPaginatedUsers(payload) ? payload : isPaginatedUsers((payload as ApiEnvelope<unknown>)?.data) ? (payload as ApiEnvelope<PaginatedUsers>).data : undefined;

  if (!paginatedUsers) {
    throw new Error("The users endpoint returned an unexpected response format.");
  }

  return paginatedUsers;
}
