'use client'

import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import {createTodo} from "@/app/form3/actions";

const initialState = {
  message: ''
}

function SubmitButton() {
  const {pending} = useFormStatus()
  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? 'Adding' : 'Add'}
    </button>
  )
}

export async function AddTodoForm() {
  const [state, formAction] = useFormState(createTodo, initialState)
  return (
    <form action={formAction} className="bg-sky-600">
      <input type="text" name="todo" className="bg-black"/>
      <SubmitButton/>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  )
}