import {NextResponse} from "next/server";

export async function GET() {
  const signal: AbortSignal = new AbortSignal()
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {signal})
  const data = await res.json()
  console.log(data)
  return NextResponse.json(data)
}