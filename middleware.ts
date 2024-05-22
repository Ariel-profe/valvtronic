import NextAuth from 'next-auth';
import { auth as authentication } from "@/auth"

import authConfig from '@/auth.config';
import { DEFAULT_LOGIN_REDIRECT, adminRoutes, apiAuthPrefix, privateRoutes, publicRoutes } from '@/routes';

const { auth } = NextAuth(authConfig);    

export default auth(async(req) => {
    
    const {nextUrl} = req;

    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    // const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
    const isAdminRoute = adminRoutes.includes(nextUrl.pathname);

    if(isApiAuthRoute){
        return;
    };

    // if(isAdminRoute && req.auth?.user.role !== "ADMIN"){
        
    //     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    // };

    if(isPrivateRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return ;
    }

    // if(!isLoggedIn && !isPublicRoute && nextUrl.pathname !== "/login"){
    //     return Response.redirect(new URL("/login", nextUrl))
    // }

    return;
});

export const config = {
    matcher: [
      // Exclude files with a "." followed by an extension, which are typically static files.
      // Exclude files in the _next directory, which are Next.js internals.
   
      "/((?!.+\\.[\\w]+$|_next).*)",
      // Re-include any files in the api or trpc folders that might have an extension
      "/(api|trpc)(.*)"
    ]
  };