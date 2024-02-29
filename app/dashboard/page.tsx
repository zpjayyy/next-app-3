'use client'

import React from "react";

export default function Page() {
  const [error, setError] = React.useState(false)
  const handleGetError = () => {
    setError(true)
  }
  return (
    <>
      {error ? Error() : <button onClick={handleGetError}>Get error</button>}
    </>
  )
}

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: "hello world"
  }
}