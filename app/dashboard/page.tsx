'use client'

import React, {Suspense} from "react";

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

async function PostFeed() {
  await sleep(2000)
  return <div>hello post feed</div>
}

async function Weather() {
  await sleep(8000)
  return <div>hello weather</div>
}

async function Recommend() {
  await sleep(5000)
  return <div>hello recommend</div>
}

export default function Dashboard() {
  return (
    <section className="p-20">
      <Suspense fallback={<p>loading post feed...</p>}>
        <PostFeed/>
      </Suspense>
      <Suspense fallback={<p>loading weather...</p>}>
        <Weather/>
      </Suspense>
      <Suspense fallback={<p>loading recommend</p>}>
        <Recommend/>
      </Suspense>
    </section>
  )
}

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: "hello world"
  }
}