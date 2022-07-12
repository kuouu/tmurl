import { NextResponse } from 'next/server'

export async function middleware(req) {
  const { pathname } = req.nextUrl
  const decodedStr = decodeURIComponent(pathname)
  if (decodedStr === '/') {
    return NextResponse.redirect('index')
  }
  return NextResponse.next()
}