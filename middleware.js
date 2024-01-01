import { NextResponse } from "next/server";

export function middleware(request) {
    //console.log('hello world');
    //return Response.json({
        //msg: 'hello there',
    //});

    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: ['/about/:path*', ],
}