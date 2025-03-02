import { NextResponse } from "next/server"

export function middleware(request) {
    console.log('Customer is browsing the page!')
  return NextResponse.next()
}


