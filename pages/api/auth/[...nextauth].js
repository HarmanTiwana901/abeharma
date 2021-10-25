import NextAuth from 'next-auth';
import { session } from 'next-auth/client';

import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
    providers: [
        DiscordProvider({
          clientId: process.env.DISCORD_CLIENT_ID,
          clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
      ],
    database: process.env.DATABASE_URL,
    callbacks: {
      async session({ session, token, user }) {
        console.log('user', user);
        console.log('token', token);
      }
    },
    /*
    
    session: {
        jwt: true
    },
    */
    secret: process.env.NEXT_AUTH_SECRET
})