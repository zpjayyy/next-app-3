'use client'

import {useFormState} from "react-dom";
import {createTodo} from "@/app/form4/actions";
import {useOptimistic} from "react";

export default function Form({todos}: { todos: string[] }) {
  const [state, sendFormAction] = useFormState(createTodo, {message: ''})

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos.map((text) => ({text: text, sending: false})),
    (state, newTodo: string) => [
      ...state,
      {
        text: newTodo,
        sending: true
      }
    ]
  )


  async function formAction(formData: FormData) {
    const todo = formData.get('todo')
    if (typeof todo === 'string') {
      addOptimisticTodo(todo)
    }
    sendFormAction(formData)
  }

  console.log(optimisticTodos)

  return (
    <>
      <form className="bg-black" action={formAction}>
        <input type="text" name="todo" className="bg-blue-600"/>
        <button type="submit">Add</button>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
      <ul className="bg-sky-600">
        {optimisticTodos.map(({text, sending}, index) => <li key={index}>{text}{sending &&
            <small>(sending)</small>}</li>)}
      </ul>
    </>
  )
}
