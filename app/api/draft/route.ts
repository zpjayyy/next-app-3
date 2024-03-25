import { NextRequest, NextResponse } from "next/server";
import { draftMode } from "next/headers";

export async function GET(request: NextRequest) {
  draftMode().enable();
  return new NextResponse("Draft mode is enabled");
}
