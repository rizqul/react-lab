import type { TodoJsonPlaceholder } from "../types/todo.type";
import api from "./api";

export async function getTodos(): Promise<TodoJsonPlaceholder[]> {
  const res = api.get("/todos");
  return (await res).data;
}
