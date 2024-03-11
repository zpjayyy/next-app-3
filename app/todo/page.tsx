'use client'

import React, {useEffect, useState} from 'react'

function getRandomInt(min: number, max: number) {
  const minCeil = Math.ceil(min)
  const maxFloor = Math.floor(max)
  return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil)
}

export default function TodoPage() {
  const [list, setList] = useState<[{ title: string, id: string }]>()
  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data: [{ title: string, id: string }] = (await res.json()).slice(0, getRandomInt(1, 10))
    console.log(data)
    setList(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <ul>
        {list?.map(({title, id}) => {
          return <li key={id}>{title}</li>
        })}
      </ul>
      <button onClick={() => location.reload()}>
        reload
      </button>
    </>
  )
}