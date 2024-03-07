import {NextRequest, NextResponse} from "next/server";
import {RateLimiter} from "limiter";

// export function middleware(request: NextRequest) {
//   // if (request.nextUrl.pathname.startsWith('/about')) {
//   //   return NextResponse.rewrite(new URL('/dashboard', request.url))
//   // }
//   // return NextResponse.redirect(new URL('/', request.url))
//   let cookie = request.cookies.get('next')
//   console.log(cookie)
//   const allCookie = request.cookies.getAll()
//   console.log(allCookie)
//
//   request.cookies.has('next')
//   request.cookies.delete('next')
//   request.cookies.has('next')
//
//   const response = NextResponse.next()
//   response.cookies.set('parcel', 'fast')
//   response.cookies.set({
//     name: 'parcel',
//     value: 'fast',
//     path: '/'
//   })
//   cookie = response.cookies.get('parcel')
//   console.log(cookie)
//
//   const requestHeaders = new Headers(request.headers)
//   requestHeaders.set('x-hello-middle-ware', 'true')
//
//   return response
// }

const allowedOrigins = ['https://acme.com', 'https://my-app.org']

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'ContentType, Authorization'
}

// export function middleware(request: NextRequest) {
//   const origin = request.headers.get('origin') ?? ''
//   const isAllowedOrigin = allowedOrigins.includes(origin)
//
//   const isPreflight = request.method === 'OPTIONS'
//   if (isPreflight) {
//     const preflightHeaders = {
//       ...(isAllowedOrigin && {'Access-Control-Allow-Origin': origin}),
//       ...corsOptions
//     }
//     return NextResponse.json({}, {headers: preflightHeaders})
//   }
//
//   const response = NextResponse.next()
//   if (allowedOrigins) {
//     response.headers.set('Access-Control-Allow-Origin', origin)
//   }
//
//   Object.entries(corsOptions).forEach(([key, value]) => {
//     response.headers.set(key, value)
//   })
//
//   return response
// }

// const limiter = new RateLimiter({tokensPerInterval: 3, interval: "minute", fireImmediately: true})
//
// export async function middleware(request: NextRequest) {
//   const remainRequests = await limiter.removeTokens(1)
//   if (remainRequests < 0) {
//     return new NextResponse(
//       JSON.stringify({success: false, message: 'Too Many Requests'}),
//       {status: 429, headers: {'content-type': 'application/json'}}
//     )
//   }
//   return NextResponse.json({data: 'hello'})
// }

function withMiddlewareAuth(middleware: Function) {
  return async (request: NextRequest) => {
    console.log(`aut = ${request.url}`)
    return middleware(request)
  }
}

function withMiddlewareLog(middleware: Function) {
  return async (request: NextRequest) => {
    console.log(`log = ${request.url}`)
    return middleware(request)
  }
}

async function middleware(request: NextRequest) {
  console.log(`middleware = ${request.url}`)
  return NextResponse.next()
}

function chain(functions: Function[], index: number = 0): Function {
  const current = functions[index]
  if (current) {
    const next = chain(functions, index + 1)
    return current(next)
  }
  return () => NextResponse.next()
}

export default chain([withMiddlewareLog, withMiddlewareAuth])

export const config = {
  // matcher: [
  //   '/about/:path*',
  //   {
  //     source: '/api/:path*',
  //     has: [
  //       {type: 'header', key: 'Authorization', value: 'Bearer Token'},
  //       {type: 'query', key: 'userId', value: '123'}
  //     ],
  //     missing: [
  //       {type: 'cookie', key: 'session', value: 'active'}
  //     ]
  //   }
  // ]
  matcher: [
    '/api/:path*',
  ]
}