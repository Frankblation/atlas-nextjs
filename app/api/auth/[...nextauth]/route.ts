import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { handlers } from "@/auth";
export const { GET, POST } = handlers;


const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
})

