import {findTodo} from "@/app/form3/actions";
import {AddTodoForm} from "@/app/form3/form";

export default async function Page() {
  const todos = findTodo()
  return (
    <>
      <AddTodoForm/>
      <ul>
        {todos.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
    </>
  )
}