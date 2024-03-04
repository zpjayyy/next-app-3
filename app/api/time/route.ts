import {NextResponse} from "next/server";

export const revalidate = 10

export async function GET() {
  console.log('GET api/time')
  return NextResponse.json({data: new Date().toLocaleTimeString()})
}