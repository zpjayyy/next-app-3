import { findTodos, createTodo} from "@/app/form2/actions";

export default async function Page() {
  const todos = await findTodos()
  return (
    <>
      <form action={createTodo}>
        <input type="text" name="todo"/>
        <button type="submit">submit</button>
      </form>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </>
  )
}