import { NextResponse } from 'next/server'
import { getOriginURL } from '../lib/notion'

export async function middleware(req) {
  const { pathname } = req.nextUrl
  const decodedStr = decodeURIComponent(pathname)
  const db = await getOriginURL(decodedStr.substring(1));
  if (db.results.length !== 0) {
    const link = db.results[0].properties.Original.url
    return NextResponse.redirect(link)
  }
  return NextResponse.next()
}