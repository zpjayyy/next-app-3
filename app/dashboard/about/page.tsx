import {use} from "react"

export default function Page() {
  const {message} = use(getData())
  return <h1>hello about</h1>
}

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return {
    message: "hello about"
  }
}