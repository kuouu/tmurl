import { NextResponse } from 'next/server'
import { getOriginURL } from '../lib/notion'
import ReactGA from 'react-ga';

export async function middleware(req) {
  const { pathname } = req.nextUrl
  const decodedStr = decodeURIComponent(pathname)
  const db = await getOriginURL(decodedStr.substring(1))
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  ReactGA.initialize(GA_TRACKING_ID)
  ReactGA.pageview(decodedStr)
  if (db.results.length !== 0) {
    const link = db.results[0].properties.Original.url
    return NextResponse.redirect(link)
  }
  return NextResponse.next()
}