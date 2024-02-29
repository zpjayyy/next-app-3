'use client'

import {useEffect} from "react";

export default function Error({error, reset}: Readonly<{ error: boolean, reset: () => {} }>) {
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>
        Try again
      </button>
    </div>
  )
}