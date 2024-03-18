'use server'

import {revalidatePath} from "next/cache";

const data = ['阅读', '写作', '冥想']

export async function findTodos() {
  return data
}

export async function createTodo(formData: FormData) {
  const todo = formData.get('todo')
  if (typeof todo === "string") {
    data.push(todo)
  }
  revalidatePath('/form2')
  return data
}