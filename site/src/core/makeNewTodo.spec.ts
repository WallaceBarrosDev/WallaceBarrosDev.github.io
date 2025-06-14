import type { Todo } from '@/types'
import { describe, it, expect } from 'vitest'
import makeNewTodo from './makeNewTodo'

describe('todo test (unit)', () => {
  it('make new todo', () => {
    // Arrage
    const myDescription: string = 'my description teste'

    const exprectString: Todo  = {
      id: expect.any(String),
      description: myDescription,
      dateAt: expect.any(String)
    }

    // Act
    const newTodo: Todo = makeNewTodo(myDescription);

    //Assert
    expect(exprectString).toStrictEqual(newTodo)
  })
})
