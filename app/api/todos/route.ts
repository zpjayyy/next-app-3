import {NextRequest, NextResponse} from "next/server";

const data = ['阅读', '写作', '冥想']

export async function GET() {
  return NextResponse.json({data})
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const todo = formData.get('todo')
  if (typeof todo === "string") {
    data.push(todo)
  }
  return NextResponse.json({data})
}