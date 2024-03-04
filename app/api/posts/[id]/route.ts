import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, context: { params: {id: string}}) {
  const field = request.nextUrl.searchParams.get("dataField")
  const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)).json()
  const result = field ? {[field]: data[field]} : data
  return NextResponse.json(result)
}