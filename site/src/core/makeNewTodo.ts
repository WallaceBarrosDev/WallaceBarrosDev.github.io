import type { Todo } from "@/types";

export default function makeNewTodo(description: string): Todo {
  return {
    id: crypto.randomUUID(),
    description,
    dateAt: new Date().toISOString()
  }
}