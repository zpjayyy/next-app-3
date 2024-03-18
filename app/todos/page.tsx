'use client'

import {FormEvent, useEffect, useState} from "react";

export default function Page() {
  const [todos, setTodos] = useState<[string]>([""])

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await (await fetch('/api/todos')).json()
      setTodos(data)
    }
    fetchData()
  }, [])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const response = await fetch('/api/todos', {
      method: 'POST',
      body: new FormData(event.currentTarget),
    })

    const {data} = await response.json()
    setTodos(data)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="todo"/>
        <button type="submit">submit</button>
      </form>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </>
  )
}

