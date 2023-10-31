import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      if (isLoggedIn){ return true }
      return false


      // if (isLoggedIn) {
      //   return Response.redirect(new URL('/', nextUrl));
      // }
      // return true;
    },
  },
} satisfies NextAuthConfig;