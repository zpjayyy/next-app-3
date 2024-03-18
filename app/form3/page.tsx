import {findTodo} from "@/app/form3/actions";
import {AddTodoForm} from "@/app/form3/form";

export default async function Page() {
  const todos = await findTodo()
  return (
    <>
      <AddTodoForm/>
      <ul className="bg-black">
        {todos.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
    </>
  )
}