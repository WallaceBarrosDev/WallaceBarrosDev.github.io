import type { Todo } from "@/types";

export default function makeNewTodo(description: string): Todo {
  return {
    id: '1',
    description,
    dateAt: new Date().toString()
  }
}