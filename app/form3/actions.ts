'use server'

import {revalidatePath} from "next/cache";

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

let data = ['写作', '阅读', '冥想']

export function findTodo() {
  return data
}

export async function createTodo(preState: any, formDate: FormData) {
  await sleep(500)
  const todo = formDate.get('todo')
  if (typeof todo === "string") {
    data.push(todo)
  }
  revalidatePath('/form3')
  return {
    message: `add ${todo} success`
  }
}
