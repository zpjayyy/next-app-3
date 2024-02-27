'use client'

import {useState} from "react";
import Link from "next/link";

export default function DashboardLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <Link href={"/dashboard/about"}>about</Link>
        <br/>
        <Link href={"/dashboard/settings"}>settings</Link>
      </div>
      <h1>Layout {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {children}
    </>
  )
}