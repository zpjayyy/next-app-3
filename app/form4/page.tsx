import {findTodo} from "@/app/form4/actions";
import Form from "@/app/form4/form";

export default async function Page() {
  const todos = await findTodo()
  return (
    <Form todos={todos}/>
  )
}