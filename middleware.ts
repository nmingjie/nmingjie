import { NextRequest, NextResponse } from "next/server";
const isPasswordEnabled = !!process.env.PASSWORD_PROTECT
export async function middleware(req: NextRequest){
    const isLoggedIn = req.cookies.has('login');
    const isPathPasswordProtect = req.nextUrl.pathname.startsWith("/password-protect")

    const protectedPath = ['works/sfems', 'works/cep', 'works/ssmc']
    console.log("req",req.nextUrl.pathname)
    const isPathProtect =  protectedPath.includes(req.nextUrl.pathname);

    if(isPasswordEnabled && !isLoggedIn && !isPathPasswordProtect){
        return NextResponse.redirect(new URL("/password-protect", req.url))
    }
    return NextResponse.next()
}
export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - favicon.ico (favicon file)
       */
      // '/((?!api|_next/static|favicon.ico).*)',
      '/works/sfems',
      '/works/cep',
      '/works/ssmc',
      // '/((?!api|_next/static|favicon.ico|works).*',
      // '/(works/*)'
    ],
  }