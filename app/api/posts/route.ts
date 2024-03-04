import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  console.log(`pathname = ${pathname}`)
  const searchParams = request.nextUrl.searchParams
  console.log(`searchParams = ${searchParams}`)

  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const article = await request.json()
  return NextResponse.json({
    id: Math.random().toString(36).slice(-8),
    data: article
  }, {status: 201})
}